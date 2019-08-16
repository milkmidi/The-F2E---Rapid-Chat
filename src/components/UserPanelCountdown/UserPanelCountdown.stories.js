import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import UserPanelCountdown from '.';

Vue.component('UserPanelCountdown', UserPanelCountdown);

const stories = storiesOf('UserPanelCountdown', module);
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
        UserPanelCountdown`,
  }));
