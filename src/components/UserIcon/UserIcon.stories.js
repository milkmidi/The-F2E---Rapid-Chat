import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import UserIcon from '.';

Vue.component('UserIcon', UserIcon);

const stories = storiesOf('UserIcon', module);
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
        UserIcon`,
  }));
