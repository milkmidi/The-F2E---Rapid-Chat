<script>
import Navigation from '@/components/Navigation';
import useMousePosition from '@/utils/hooks/useMousePosition';

export default {
  data: vm => ({
    mouse: useMousePosition(vm),
  }),
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  components: {
    Navigation,
  },
};
</script>

<template lang="pug">
#app
  Navigation
  p {{mouse}}
  //- ErrorBoundary
  transition(name="fade" mode="out-in")
      router-view.router-view
</template>

<style lang="stylus">
// @require '~css/index'
</style>


