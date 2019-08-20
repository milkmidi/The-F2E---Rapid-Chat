<script>
import UserIcon from '../UserIcon';
import UserPanelMore from '@/components/UserPanelMore';

export default {
  props: {
    nickName: {
      type: String,
      default: 'nickName',
    },
    socialName: {
      type: String,
      default: '',
    },
    contactName: {
      type: String,
      default: 'contactName',
    },
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
.user-panel.border-radius
  .user-panel-names
    UserIcon.user-panel__user-icon(:thumbIndex="thumbIndex")
    .user-info
      .h5
        strong {{nickName}}
      .d-flex.align-items-center
        template(v-if="!hasSlot")
          .fab.mr-2(:class="'fa-'+socialName")
          .h6.mb-0 {{contactName}}
      i.material-icons.more(@click="moreMode=!moreMode") more_vert
  UserPanelMore(
    :nickName="nickName"
    :thumbIndex.sync="thumbIndex"
    :show.sync="moreMode"
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
  .user-info
    color white
  .more
    position absolute
    top 50%
    right 0px
    transform translateY(-50%)
    cursor pointer
</style>