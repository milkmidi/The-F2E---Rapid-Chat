<script>
export default {
  props: {
    thumbIndex: {
      type: Number,
      default() {
        return Math.floor(Math.random() * 6);
      },
    },
    clickable: {
      type: Boolean,
    },
    active: Boolean,
    autoSize: Boolean,
  },
  computed: {
    elClass() {
      return {
        'is-clickable': this.clickable,
        'is-active': this.active,
      };
    },
    spriteClass() {
      return {
        [`thumbnail-${this.thumbIndex + 1}`]: true,
        autosize: this.autoSize,
      };
    },
  },
};
</script>

<template lang="pug">
.user-icon.border-radius(:class="elClass" v-on="$listeners")
  .sprite(:class="spriteClass")
</template>

<style lang="stylus">
.user-icon
  display inline-block
  padding 4px
  background-color white
  &.is-clickable
    cursor pointer
    &:hover
      background-color #e3e3e3
  &.is-active
    background-color #e3e3e3
  .sprite
    vertical-align middle
</style>