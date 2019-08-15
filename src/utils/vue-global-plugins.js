import VueRx from 'vue-rx';


export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;
    Vue.use(VueRx);
  },
};
