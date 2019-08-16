<script>
export default {
  props: {},
  data: () => ({
  }),
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  components: {
  },
};
</script>

<template lang="pug">
.emoticon
  .sprite.sticker-hi(@click="$emit('sticker', 'hi')")
  .sprite.sticker-lol(@click="$emit('sticker', 'lol')")
  .sprite.sticker-no(@click="$emit('sticker', 'no')")
  .sprite.sticker-ok(@click="$emit('sticker', 'ok')")
  .sprite.sticker-thx(@click="$emit('sticker', 'thx')")
  .sprite.sticker-wtf(@click="$emit('sticker', 'wtf')")
  .trangle
</template>

<style lang="stylus">
$color = alpha(white, 0.9)
.emoticon
  position relative
  padding 10px
  border-radius 20px
  background-color $color
  .sprite
    cursor pointer
    &:hover
      transform scale(1.1)
  .trangle
    trangle($color)
    position absolute
    bottom 0
    left 100px
    transform translateY(100%)
</style>