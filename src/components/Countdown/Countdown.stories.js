import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered/vue';
import { withKnobs, number } from '@storybook/addon-knobs';

import Countdown from '.';

Vue.component('Countdown', Countdown);

const stories = storiesOf('Countdown', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Centered)
  .add('basic', () => ({
    props: {
      scale: {
        default: number('scale', 1, {
          range: true,
          min: 1,
          max: 100,
          step: 1,
        }),
      },
    },
    template: pug`
      div
        Countdown(:time="600" @timeup="log('timeup')" :scale="scale")`,
  }));
