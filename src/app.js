
import Vue from 'vue';
import 'css/index.styl';
import App from '@/containers/App';
import vueGlobalPlugins from '@/utils/vue-global-plugins';
import router from './router';
import store from './store';


vueGlobalPlugins.install(Vue);

  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
  });
  