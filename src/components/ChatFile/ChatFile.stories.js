import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';


import ChatFile from '.';

Vue.component('ChatFile', ChatFile);


const stories = storiesOf('ChatFile', module);
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
        ChatFile(fileSize="102kb")`,
  }))
  .add('dark', () => ({
    props: {
    },
    data: () => ({
    }),
    methods: {
    },
    template: pug`
      div
        ChatFile(fileSize="102kb" dark)`,
  }));
