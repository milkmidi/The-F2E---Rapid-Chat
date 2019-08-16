<script>
import RapidChatInfo from '../../components/RapidChatInfo';

export default {
  data: () => ({
  }),
  mounted() {

  },
  beforeDestroy() {
  },
  components: {
    RapidChatInfo,
  },
};
</script>

<template lang="pug">
.main-root
  RapidChatInfo
</template>

<style scoped lang="stylus">
.main-root
  background-color red
  +sm()
    background-color green
  .flex
    display flex
  .box
    width 100%
    height 50px
    background-color red
</style>
