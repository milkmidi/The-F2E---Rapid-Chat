
<script>
export default {
  props: {
    dark: [String, Boolean],
  },
};
</script>

<template lang="pug">
.chat(:class="{dark: !!dark}")
  slot
</template>


<style lang="stylus">
.chat
  display inline-block
  padding 10px 24px
  border 1px solid black
  border-radius 20px
  &.dark
    background-color black
    color white
</style>