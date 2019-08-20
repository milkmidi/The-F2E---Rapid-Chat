<script>
import UserPanel from '../UserPanel';
import Countdown from '../Countdown';

export default {
  props: {
    nickName: {
      type: String,
      default: 'NickName',
    },
  },
  components: {
    UserPanel,
    Countdown,
  },
};
</script>

<template lang="pug">
.user-panel.border-radius.is-primary
  .user-panel-names
    UserIcon.user-panel__user-icon
    .user-info
      .h5
        strong {{nickName}}
      .d-flex.align-items-center
        Countdown(@timeup="$emit('timeup')")
</template>

<style lang="stylus">
.user-panel
  min-width 350px
  background-color black
  padding 15px
  overflow hidden
  &.is-primary
    background-color colorPrimary
    *
      color black
</style>