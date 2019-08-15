/* eslint no-bitwise:0 */


export type Position = {
  top:number,
  left:number,
  height:number,
  width:number
}

/**
 * get element position relative to the document;
 * @param {HTMLElement|string} ele
 * @return {Position}
 */
export const getElementPosition = (value:HTMLElement|string):Position => {
  if (!value) {
    return null;
  }
  if (typeof value === 'string') {
    // eslint-disable-next-line
    value = document.querySelector(value);
  }
  const { body } = document;
  const rect = value.getBoundingClientRect();

  const doc = document.documentElement;

  const scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
  const scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft || 0;

  const clientTop = doc.clientTop || body.clientTop || 0;
  const clientLeft = doc.clientLeft || body.clientLeft || 0;

  const top = (rect.top + scrollTop) - clientTop;
  const left = (rect.left + scrollLeft) - clientLeft;

  return {
    top: top | 0,
    left: left | 0,
    width: rect.width,
    height: rect.height,
  };
};

export const inViewPercent = (ele:HTMLElement):number => {
  const scrollTop = window.pageYOffset;

  const min = getElementPosition(ele).top;
  const max = min + ele.clientHeight;

  return (scrollTop - min) / (max - min);
};


export const fireEvent = (element:HTMLElement, eventType:string) => {
  // IE
  if (document.createEventObject) {
    const evt = document.createElement();
    return element.fireEvent(`on${eventType}`, evt);
  }
  const evt = document.createEvent('HTMLEvents');
  evt.initEvent(eventType, true, true);
  return !element.dispatchEvent(evt);
};

let savedScrollTop:number = 0;
export const hiddenBodyScroll = (hidden:boolean) => {
  if (hidden) {
    // ios, android
    savedScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    document.body.classList.add('no-scroll');
    document.body.style.top = `-${savedScrollTop}px`;
  } else {
    document.body.classList.remove('no-scroll');
    document.documentElement.scrollTop = savedScrollTop;
    document.body.scrollTop = savedScrollTop;
  }
};
