/**
 * @author milkmidi
 * @version 1.0.0
 */
import Vue from 'vue';

const eventBus:Vue = new Vue();

/* Object.defineProperties(Vue.prototype, {
  $bus: {
    get() {
      return eventBus;
    },
  },
}); */
export const on = (eventName:string, handler:Function) => {
  eventBus.$on(eventName, handler);
};
export const once = (eventName:string, handler:Function) => {
  eventBus.$once(eventName, handler);
};
export const off = (eventName:string, handler:Function) => {
  eventBus.$off(eventName, handler);
};
export const emit = (eventName:string, params:Object) => {
  eventBus.$emit(eventName, params);
};
export default eventBus;
