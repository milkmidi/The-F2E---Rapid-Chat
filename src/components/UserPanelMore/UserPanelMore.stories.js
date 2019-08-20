import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import UserPanelMore from '.';

Vue.component('UserPanelMore', UserPanelMore);

const stories = storiesOf('UserPanelMore', module);
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
      div(style="background:black; padding: 15px;")
        UserPanelMore(:show="true")`,
  }));
