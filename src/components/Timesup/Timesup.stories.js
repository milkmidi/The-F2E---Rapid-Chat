import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import Timesup from '.';

Vue.component('Timesup', Timesup);

const stories = storiesOf('Timesup', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .add('basic', () => ({
    props:{
    },
    data: () => ({
    }),
    methods: {
    },
    template: pug`
      div
        Timesup`,
  }));
