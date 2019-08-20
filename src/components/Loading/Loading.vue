<template lang="pug" functional>
transition(name="fade")
  .loading.fill-100.flex-center(v-show="props.show")
    .fa-3x
      i.fas.fa-circle-notch.fa-spin(v-show="!props.search")
      .fa-search-wrap
        i.fas.fa-search(v-show="props.search")
</template>

<style lang="stylus" scoped>
.loading
  position fixed
  background-color alpha(white,0.7)
  z-index 9999

  // https://codepen.io/ZachSaucier/pen/rsvgK
  @keyframes rotate
    100%
      transform rotate(-360deg)
  .fa-search-wrap
    width 50px;
    height @width
    margin-left -25px
    margin-top -25px
    transform-origin 100% center
    position relative
    animation rotate 3s linear infinite
    i
      position absolute
      height 100%
      width 100%
      animation rotate 3s linear reverse infinite
</style>