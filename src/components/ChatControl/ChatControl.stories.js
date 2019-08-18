import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import ChatControl from '.';

Vue.component('ChatControl', ChatControl);

const stories = storiesOf('ChatControl', module);
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
      div(style="width: 640px;")
        ChatControl(
          @attachFile="log('attachFile')"
          @insertPhoto="log('insertPhoto')"
          @insertEmoticon="log('insertEmoticon')"
          @send="log")`,
  }));
