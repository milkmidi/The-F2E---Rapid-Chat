import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import Loading from '.';

Vue.component('Loading', Loading);

const stories = storiesOf('Loading', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .add('basic', () => ({
    template: pug`
      div
        Loading(:show="true")`,
  }))
  .add('search', () => ({
    template: pug`
      div
        Loading(:show="true" :search="true")`,
  }));
