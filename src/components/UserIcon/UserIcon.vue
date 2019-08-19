<script>
export default {
  props: {
    thumbIndex: {
      type: Number,
      default() {
        return Math.floor(Math.random() * 6) + 1;
      },
    },
  },
};
</script>

<template lang="pug">
.user-icon.border-radius
  .sprite(:class="'thumbnail-'+ thumbIndex")
</template>

<style lang="stylus">
.user-icon
  display inline-block
  padding 4px
  background-color white
  .sprite
    vertical-align middle
</style>