import { addParameters, configure } from '@storybook/vue';
// import { themes } from '@storybook/theming';
import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import vueGlobalPlugins from '../../src/utils/vue-global-plugins';
import './FakeComponent';
/* eslint-disable */
import '../../src/css/index.styl';
import './storybook.styl';
/* eslint-enable */

vueGlobalPlugins.install(Vue);

// Register custom components.
Vue.use(Vuex);


const logMixin = {
  methods: {
    log(val:string) {
      action(this.name || '')(Array.isArray(val) ? val.join(',').toString() : val);
      console.log(val);
    },
  },
};
Vue.mixin(logMixin);

addParameters({
  options: {
    name: 'milkmidi',
  },
});


const req = require.context('../../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
