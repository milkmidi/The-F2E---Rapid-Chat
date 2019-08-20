<script>
import Input from '@/components/Input';
import UserIcon from '@/components/UserIcon';

export default {
  props: {
    show: Boolean,
    thumbIndex: Number,
    nickName: String,
  },
  data: vm => ({
    innerNickName: vm.nickName,
  }),
  computed: {
    moreContentStyle() {
      return {
        opacity: this.show ? 1 : 0,
        'max-height': this.show
          ? `${this.$refs.moreContent.scrollHeight}px`
          : '0',
      };
    },
    innerIndex: {
      get():number {
        return this.thumbIndex;
      },
      set(val:number) {
        this.$emit('update:thumbIndex', val);
      },
    },
  },
  methods: {
    saveClickHandler() {
      this.$emit('submit', {
        nickName: this.innerNickName,
      });
      this.$emit('update:show', false);
    },
  },
  components: {
    Input,
    UserIcon,
  },
};
</script>

<template lang="pug">
transition(name="fade")
  .user-panel-more(:style="moreContentStyle" ref="moreContent")
    .row.pt-4
      .col PORTRAIT
    .row.no-gutters
      .col-2
        .sprite.thumbnail-1.autosize(:class="{active:innerIndex===0}" @click="innerIndex=0")
      .col-2
        .sprite.thumbnail-2.autosize(:class="{active:innerIndex===1}" @click="innerIndex=1")
      .col-2
        .sprite.thumbnail-3.autosize(:class="{active:innerIndex===2}" @click="innerIndex=2")
      .col-2
        .sprite.thumbnail-4.autosize(:class="{active:innerIndex===3}" @click="innerIndex=3")
      .col-2
        .sprite.thumbnail-5.autosize(:class="{active:innerIndex===4}" @click="innerIndex=4")
      .col-2
        .sprite.thumbnail-6.autosize(:class="{active:innerIndex===5}" @click="innerIndex=5")
    Input(theme="light" placeholder="NICKNAME" v-model="innerNickName")
    .btn(@click="saveClickHandler") SAVE
</template>

<style lang="stylus">
.user-panel-more
  // overflow hidden
  transition all 0.35s ease-in-out
  color white
  .sprite
    cursor pointer
    opacity 0.5
    &.active
      opacity 1
  .btn
    background-color white
    color black
    width calc(100% + 30px)
    margin-left -15px
    margin-bottom -15px
</style>