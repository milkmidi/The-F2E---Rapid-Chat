import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import README from './README.md';
import ChatFile from '.';
import ChatMessage from '@/components/ChatMessage';

Vue.component('ChatFile', ChatFile);


const stories = storiesOf('ChatFile', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('basic', () => ({
    template: pug`
      div
        ChatFile(fileSize="102kb" fileName="9527.zip")`,
  }))
  .add('with border', () => ({
    components: {
      ChatMessage,
    },
    template: pug`
      ChatMessage(dark="1")
        ChatFile(fileSize="102kb" fileName="9527.zip")`,
  }));
