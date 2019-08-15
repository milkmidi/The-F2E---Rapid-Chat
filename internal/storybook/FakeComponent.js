import { action } from '@storybook/addon-actions';
import Vue from 'vue';

Vue.component('router-link', {
  props: {
    to: String,
  },
  methods: {
    clickHandler(e) {
      e.preventDefault();
      action('router-link')(this.to);
    },
  },
  template: '<a @click="clickHandler" :data-to="to"><slot></slot></a>',
});


Vue.component('router-view', {
  template: '<div class="router-view"><slot/></div>',
});
