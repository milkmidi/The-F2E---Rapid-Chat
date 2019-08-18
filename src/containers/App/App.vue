<script>
import Loading from '@/components/Loading';

export default {
  data: () => ({
  }),
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  components: {
    Loading,
  },
};
</script>

<template lang="pug">
#app
  Loading(:show="this.$store.state.loading")
  Loading(:show="this.$store.state.loadingSearch" :search="true")
  transition(name="fade" mode="out-in")
    router-view.router-view
</template>

<style lang="stylus">
.router-view
  width 100%
  height 100%
</style>


