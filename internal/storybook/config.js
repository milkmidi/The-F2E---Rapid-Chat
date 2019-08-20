import { addParameters, configure, addDecorator } from '@storybook/vue';
// import { themes } from '@storybook/theming';
import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import registerWithPanelTitle from 'storybook-readme/registerWithPanelTitle';


/* eslint-disable */
import '../../src/css/index.styl';

// for Vue storybook
import { addReadme } from 'storybook-readme/vue';
/* eslint-enable */

// Register custom components.
Vue.use(Vuex);

registerWithPanelTitle('Docs'); // <---- vue subpackage


addDecorator(addReadme);

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
