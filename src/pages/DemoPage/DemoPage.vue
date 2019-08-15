<script>
import TestComponent from '@/components/TestComponent';
import TestChildComponent from '@/components/TestComponent/TestChildComponent.vue';
import MyScopedSlots from '@/components/TestComponent/MyScopedSlots';


export default {
  props: {},
  data: () => ({
  }),
  computed: {
  },
  methods: {
  },
  mounted() {
    console.log('DemoPage mounted');
    console.log(Array.from(Array(10).keys()));
  },
  beforeDestroy() {
  },
  components: {
    TestComponent,
    TestChildComponent,
    MyScopedSlots,
  },
};
</script>

<template lang="pug">
.demo-page
  TestComponent
    template(v-slot="{label, foo}")
      TestChildComponent(:label="label" @foo="foo")
    template(v-slot:todo="{todo, foo}" @foo="foo")
      p abc {{todo.text}}
      button(@click="foo(todo)") Delete
  MyScopedSlots(v-slot="{label, foo}")
    div
      h2 {{label}}
      button(@click="foo(123)") Delete
  .content
    h1 demo-page
    .bottom bottom
</template>

<style lang="stylus">
.demo-page
  position relative
  .content
    height 1200px
  .bottom
    position absolute
    bottom 0
    font-size 50px
  // display: none
</style>