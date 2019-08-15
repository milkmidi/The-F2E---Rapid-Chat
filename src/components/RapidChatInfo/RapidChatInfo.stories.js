import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import RapidChatInfo from './';

Vue.component('RapidChatInfo', RapidChatInfo);

const stories = storiesOf('RapidChatInfo', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .add('basic', () => ({
    props:{

    },
    data: () => ({
    }),
    methods: {
    },
    template: pug`div
            RapidChatInfo`,
  }));
