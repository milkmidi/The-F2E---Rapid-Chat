import VueRx from 'vue-rx';
import VueSocketIO from 'vue-socket.io';
import store from '../store';

export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;
    Vue.use(VueRx);
    Vue.use(new VueSocketIO({
      debug: process.env.NODE_ENV === 'development',
      connection: 'http://localhost:9527',
      vuex: {
        store,
        actionPrefix: 'socket_',
        mutationPrefix: 'socket_',
      },
    }));
  },
};
