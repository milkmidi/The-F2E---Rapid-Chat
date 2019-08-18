import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import RapidChatLogin from '.';

Vue.component('RapidChatLogin', RapidChatLogin);

const stories = storiesOf('RapidChatLogin', module);
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
        RapidChatLogin(@start="log")`,
  }));
