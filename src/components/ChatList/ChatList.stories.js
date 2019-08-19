import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs } from '@storybook/addon-knobs';
import README from './README.md';
import ChatList from '.';
import { mockData } from '@/components/ChatList/mockData';


Vue.component('ChatList', ChatList);

const stories = storiesOf('ChatList', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('basic', () => ({
    props: {
    },
    data: () => ({
      list: mockData(10),
    }),
    methods: {
    },
    template: pug`
      div(style="width:640px; background:#ffd500; padding:1rem;")
        ChatList(:list="list")`,
  }));
