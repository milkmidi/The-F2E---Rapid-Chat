<script>
import Input from '@/components/Input';

export default {
  props: {
    show: Boolean,
  },
  data: () => ({
    nickName: '',
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
  },
  methods: {
    saveClickHandler() {
      this.$emit('submit', {
        nickName: this.nickName,
      });
      this.$emit('update:show', false);
    },
  },
  components: {
    Input,
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
        .sprite.thumbnail-1.autosize
      .col-2
        .sprite.thumbnail-2.autosize
      .col-2
        .sprite.thumbnail-3.autosize
      .col-2
        .sprite.thumbnail-4.autosize
      .col-2
        .sprite.thumbnail-5.autosize
      .col-2
        .sprite.thumbnail-6.autosize
    Input(theme="light" placeholder="NICKNAME" v-model="nickName")
    .btn(@click="saveClickHandler") SAVE
</template>

<style lang="stylus">
.user-panel-more
  // overflow hidden
  transition all 0.35s ease-in-out
  color white
  .sprite
    cursor pointer
  .btn
    background-color white
    color black
    width calc(100% + 30px)
    margin-left -15px
    margin-bottom -15px
</style>