import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import ChatMessage from '.';

Vue.component('ChatMessage', ChatMessage);

const stories = storiesOf('ChatMessage', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .add('basic', () => ({
    template: pug`
      div
        ChatMessage The quick, brown fox jumps over a lazy dog. DJs.`,
  }))
  .add('dart', () => ({
    template: pug`
      div
        ChatMessage(dark) The quick, brown fox jumps over a lazy dog. DJs.`,
  }));
