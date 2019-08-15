<script>
import Vuex from 'vuex';
import { drag } from '@/utils/rxUtil';

import { fromEvent } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { alert, success, warning } from '@/components/Alert';
import { show } from '@/components/ModalYoutubePlayer';
import { helperState, helperMutations } from '@/store/helper';

const delay = (time:number = 100) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});


export default {
  data: () => ({
  }),
  subscriptions(vm) {
    return {
      size: fromEvent(window, 'resize')
        .pipe(
          startWith(window),
          map(() => ({ w: window.innerWidth, h: window.innerHeight })),
        ),
    };
  },
  computed: {
    ...helperState,
    ...Vuex.mapState(['windowInnerWidth', 'windowInnerHeight']),
  },
  methods: {
    // ...Vuex.mapMutations(['setLoading']),
    ...helperMutations,
    showAlert() {
      alert('hi').then(() => {
        console.log('alert closeed');
      });
    },
    showSuccess() {
      success('success').then(() => {
        console.log('success closeed');
      });
    },
    showWarning() {
      warning('warning').then(() => {
        console.log('warning closeed');
      });
    },
    showYoutube() {
      show('-HwqFAL9jDw').then(() => {
        console.log('youtube close');
      });
    },
  },
  created() {

  },
  async mounted() {
    await delay();
    console.log(1);
    await delay();
    console.log(2);
    await delay();
    console.log(3);

    delay().then(() => {

    }).finally(() => {
      console.log('es7 Promise finally');
    });

    const o = { name: 'milkmidi', email: 'milkmidi@gmail.com', code: 9527 };
    const d = { ...o };
    const a = Object.keys(d);
    const v = Object.values(d);
    for (const val of a) {
      console.log(val);
    }
    console.log(Object.assign({}, o));
    console.log(v);
    console.log(Array.from(Array(10).keys()));
    // console.log(Array.fill(5));


    this.$subscribeTo(drag(this.$refs.logo), (r) => {
      console.log(r);
    });
  },
  beforeDestroy() {
  },
  components: {
  },
};
</script>

<template lang="pug">
  .main-root
    .logo(ref="logo")
    h2 Main hi
    .flex I'm flex
    p {{windowInnerWidth}} x {{windowInnerHeight}}
    p size: {{size.w}} x {{size.h}}
    button(@click="showAlert") showAlert
    button(@click="showSuccess") success
    button(@click="showWarning") warning
    button(@click="showYoutube") showYoutube
    .box BOX
</template>



<style scoped lang="stylus">
.main-root
  background-color red
  +sm()
    background-color green
  .flex
    display flex
  .logo
    bg('~img/logo.png')
  .box
    // width unit(add(100,20),px)
    width 100%
    height 50px
    background-color red
</style>
