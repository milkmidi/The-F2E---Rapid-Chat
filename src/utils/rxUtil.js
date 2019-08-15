/* eslint max-len:0 */
/**
 * @author milkmidi
 * @version 1.0.5
 */
import { Observable, fromEvent, merge, of } from 'rxjs';
import { debounceTime, startWith, map, delay, distinctUntilChanged, withLatestFrom, mergeMap, takeUntil } from 'rxjs/operators';
import { getElementPosition } from './index';


export const resize = (time:number = 150):Observable => {
  const rxResize = fromEvent(window, 'resize')
    .pipe(
      debounceTime(time),
      startWith(window),
      map(() => ({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })),
    );

  const rxOrientationchange = fromEvent(window, 'orientationchange')
    .pipe(
      delay(500), // ios Line Webview issus
      map(() => ({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })),
    );
  return merge(rxResize, rxOrientationchange)
    .pipe(
      distinctUntilChanged((prev, curr) => (prev.innerWidth === curr.innerWidth) && (prev.innerHeight === curr.innerHeight)),
    );
};

export const scrollPercent = ():Observable => fromEvent(window, 'scroll')
  .pipe(
    startWith(window),
    map(() => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.clientHeight;
      const winHeight = window.innerHeight;
      return scrollTop / (docHeight - winHeight);
    }),
  );

const mouseEventToCoordinate = (mouseEvent:MouseEvent):{x:number, y:number} => {
  mouseEvent.preventDefault();
  return { x: mouseEvent.clientX, y: mouseEvent.clientY };
};
const touchEventToCoordinate = (touchEvent:TouchEvent):{x:number, y:number} => ({ x: touchEvent.changedTouches[0].clientX, y: touchEvent.changedTouches[0].clientY });

export const mouseDown = (el:HTMLElement) => {
  const mouseSource = fromEvent(el, 'mousedown').pipe(map(mouseEventToCoordinate));
  const touchSource = fromEvent(el, 'touchstart').pipe(map(touchEventToCoordinate));
  return merge(mouseSource, touchSource);
};

export const mouseMove = (el:HTMLElement) => {
  const mouseSource = fromEvent(el, 'mousemove').pipe(map(mouseEventToCoordinate));
  const touchSource = fromEvent(el, 'touchmove').pipe(map(touchEventToCoordinate));
  return merge(mouseSource, touchSource);
};

export const mouseUp = (el:HTMLElement) => {
  const mouseSource = fromEvent(el, 'mouseup').pipe(map(mouseEventToCoordinate));
  const touchSource = fromEvent(el, 'touchend').pipe(map(touchEventToCoordinate));
  return merge(mouseSource, touchSource);
};

/**
 * https://codepen.io/HunorMarton/post/handling-complex-mouse-and-touch-events-with-rxjs
 * @param {HTMLElement} el
 */
export const getMouseObservables = (el:HTMLElement):{start:Observable, move:Observable, end:Observable} => (
  {
    start: mouseDown(el),
    move: mouseMove(el),
    end: mouseUp(el),
  }
);

export const drag = (el:HTMLElement):Observable => {
  const start = mouseDown(el);
  const move = mouseMove(window);
  const end = mouseUp(window);
  return start.pipe(
    mergeMap(
      dragStartEvent => move.pipe(
        takeUntil(end),
        map((dragEvent) => {
          const x = dragEvent.x - dragStartEvent.x;
          const y = dragEvent.y - dragStartEvent.y;
          return { x, y };
        }),
      ),
    ),
  );
  /* return start.mergeMap(dragStartEvent => move.takeUntil(end)
    .map((dragEvent) => {
      const x = dragEvent.x - dragStartEvent.x;
      const y = dragEvent.y - dragStartEvent.y;
      return { x, y };
    })); */
};

/* export const drop = (el:HTMLElement):Observable => {
  const { start, end } = getMouseObservables(el);
  return start.mergeMap(dragStartEvent => end.first()
    .map((dragEndEvent) => {
      const x = dragEndEvent.x - dragStartEvent.x;
      const y = dragEndEvent.y - dragStartEvent.y;
      return { x, y };
    }));
};

export const dragMovement = (el:HTMLElement):Observable => {
  const { start, move, end } = getMouseObservables(el);
  return start.mergeMap(() => {
    let prevX:number = 0;
    let prevY:number = 0;
    return move.map((dragMoveEvent) => {
      const x:number = prevX ? dragMoveEvent.x - prevX : 0;
      const y:number = prevY ? dragMoveEvent.y - prevY : 0;
      prevX = dragMoveEvent.x;
      prevY = dragMoveEvent.y;
      return { x, y };
    }).takeUntil(end);
  });
}; */

export const scrollSpy = (domName:string) => {
  let rxDom;
  if (typeof domName === 'string') {
    const querySectionDOM = Array.prototype.slice.call(document.querySelectorAll(domName));
    rxDom = of(querySectionDOM);
  } else if (Array.isArray(domName)) {
    rxDom = of(domName);
  } else {
    throw new Error('unknow type');
  }
  return fromEvent(window, 'scroll')
    .pipe(
      debounceTime(10),
      startWith(-1),
      withLatestFrom(rxDom, (main, dom) => dom),
      map((doms) => {
        const { pageYOffset } = window;
        for (let i = doms.length - 1; i >= 0; i--) {
          const element = doms[i];
          const { top } = getElementPosition(element);
          if (pageYOffset > top) {
            return i;
          }
        }
        return -1;
      }),
      distinctUntilChanged(),
    );
};
