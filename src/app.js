
import Vue from 'vue';
import 'css/index.styl';
import App from '@/containers/App';
import router from './router';
import store from './store';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
