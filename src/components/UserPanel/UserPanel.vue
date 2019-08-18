<script>
import UserIcon from '../UserIcon';

export default {
  props: {
    completeMode: {
      type: Boolean,
      default: false,
    },
    nickName: String,
    socialName: {
      type: String,
      default: '',
    },
    primary: [String, Boolean],
  },
  computed: {
    hasSlot() {
      return this.$slots.default && this.$slots.default.length !== 0;
    },
  },
  data: () => ({
    thumbIndex: Math.floor(Math.random() * 6) + 1,
  }),
  components: {
    UserIcon,
  },
};
</script>
<template lang="pug">
.user-panel.border-radius(:class="{primary:!!primary}")
  UserIcon.user-panel__user-icon
  .user-info
    .h5
      strong Nickname
    .d-flex.align-items-center
      slot
      template(v-if="!hasSlot")
        .fab.mr-2(:class="'fa-'+socialName")
        .h6.mb-0 {{nickName}}
</template>

<style lang="stylus">
.user-panel
  display flex
  align-items center
  min-width 350px
  background-color black
  padding 15px
  &__user-icon
    margin-right 1rem
  &.primary
    background-color colorPrimary
    *
      color black
  .user-info
    color white
</style>