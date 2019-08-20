<script>
import UserIcon from '../UserIcon';
import UserPanelMore from '@/components/UserPanelMore';

export default {
  props: {
    nickName: String,
    socialName: {
      type: String,
      default: '',
    },
    primary: [String, Boolean],
  },
  data: () => ({
    thumbIndex: Math.floor(Math.random() * 6) + 1,
    moreMode: false,
  }),
  methods: {
    userpanelMoreSubtmit(payload) {
      this.$emit('submit', payload);
    },
  },
  computed: {
    hasSlot() {
      return this.$slots.default && this.$slots.default.length !== 0;
    },
  },
  components: {
    UserIcon,
    UserPanelMore,
  },
};
</script>
<template lang="pug">
.user-panel.border-radius(:class="{primary:!!primary}")
  .user-panel-names
    UserIcon.user-panel__user-icon
    .user-info
      .h5
        strong Nickname
      .d-flex.align-items-center
        slot
        template(v-if="!hasSlot")
          .fab.mr-2(:class="'fa-'+socialName")
          .h6.mb-0 {{nickName}}
      i.material-icons.more(v-if="!primary" @click="moreMode=!moreMode") more_vert
  UserPanelMore(
    :show.sync="moreMode"
    v-if="!primary"
    @submit="userpanelMoreSubtmit")
</template>

<style lang="stylus">
.user-panel
  
  min-width 350px
  background-color black
  padding 15px
  overflow hidden
  .user-panel-names
    position relative
    display flex
    align-items center
    
  &__user-icon
    margin-right 1rem
  &.primary
    background-color colorPrimary
    *
      color black
  .user-info
    color white
  .more
    position absolute
    top 50%
    right 0px
    transform translateY(-50%)
    cursor pointer
</style>