import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import RapidCard from '.';

Vue.component('RapidCard', RapidCard);

const stories = storiesOf('RapidCard', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .add('basic', () => ({
    props: {

    },
    data: () => ({
    }),
    methods: {
    },
    template: pug`
      div
        RapidCard
          template(v-slot:header)
            h1 h1`,
  }));
