<script>
import UserPanel from '../UserPanel';
import Countdown from '../Countdown';

export default {
  props: {},
  data: () => ({
  }),
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  components: {
    UserPanel,
    Countdown,
  },
};
</script>

<template lang="pug">
UserPanel(primary="1")
  Countdown(@timeup="$emit('timeup')")
</template>

<style lang="stylus">
</style>