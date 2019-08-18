<script>

export default {
  model: {
    event: 'innerInput',
  },
  props: {
    placeholder: String,
    value: String,
  },
  data: () => ({
  }),
  computed: {
    innerModel: {
      get():String {
        return this.value;
      },
      set(val:String) {
        this.$emit('innerInput', val);
      },
    },
    hasInput():boolean {
      return this.innerModel !== '';
    },
    elClass():Object {
      return {
        'has-input': this.hasInput,
      };
    },
  },
};
</script>

<template lang="pug">
.input(:class="elClass")
  input(v-model="innerModel" v-on="$listeners")
  .placeholder {{placeholder}}
  svg.ic-wrap(
    :class="{ 'on': innerModel !== '' }"
    viewBox="0 0 52 52" 
    @click="innerModel = ''")
    path.ic.ic--close(d="M13 13 L39 39 M39 13 L13 39" )
</template>

<style lang="stylus" scoped>
$left = 2px
$focusColor = #00b3e6
.input
  position relative
  // display inline-block
  padding 10px 0
  overflow hidden
  .ic-wrap
    visibility hidden
    position absolute
    top -10px
    bottom 0
    margin auto
    right ($left / 3)
    width 30px
    height @width
    cursor pointer
    transform scale(0) rotate(90deg)
    defaultTransition()
    &.on
      visibility visible
      transform scale(1) rotate(0)
    .ic 
      fill black
      stroke black
      stroke-width 2
    &:hover
      .ic
        fill $focusColor
  input
    defaultTransition()
    width 100%
    padding 5px $left 2px
    border-top 0
    border-left 0
    border-right 0
    border-bottom 1px solid black
    background-color transparent
    font-size 1rem
    &:focus
      outline none
      border-bottom 1px solid $focusColor
      + .placeholder
        top 5px
        color $focusColor
  .placeholder
    defaultTransition()
    color #444
    position absolute
    top calc(50% - 5px)
    left $left
    padding 0
    transform translateY(-50%)
  &.has-input
    .placeholder
      top 5px
</style>