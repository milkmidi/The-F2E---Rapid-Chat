import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import Input from '.';

Vue.component('Input', Input);

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .add('basic', () => ({
    props: {
    },
    data: () => ({
      input: '',
    }),
    methods: {
    },
    template: pug`
      div
        Input(v-model="input" placeholder="Nickname")`,
  }))
  .add('color', () => ({
    props: {
    },
    data: () => ({
      input: '',
    }),
    methods: {
    },
    template: pug`
      div(style="background:black;padding:10px;")
        Input(v-model="input" placeholder="Nickname" theme="light")`,
  }));
