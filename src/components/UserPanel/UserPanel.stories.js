import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';

import UserPanel from '.';

Vue.component('UserPanel', UserPanel);

const stories = storiesOf('UserPanel', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .add('basic', () => ({
    props: {
    },
    data: () => ({
      nickName: 'milkmidi',
    }),
    methods: {
      submit({ nickName }) {
        this.nickName = nickName;
      },
    },
    template: pug`
      div
        UserPanel(
          :nickName="nickName"
          socialName="facebook"
          contactName="contactName"
          @submit="submit"
          )`,
  }));
