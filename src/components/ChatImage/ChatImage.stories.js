import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import ChatImage from '.';

Vue.component('ChatImage', ChatImage);

const stories = storiesOf('ChatImage', module);
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
      div(style="width:400px;")
        ChatImage(src="https://fakeimg.pl/250x100/ff0000")`,
  }));
