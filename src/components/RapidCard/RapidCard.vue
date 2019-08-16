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
.rapid-card
  .card
    .card-header
      slot(name="header")
    .card-body
      slot(name="body")
</template>

<style lang="stylus">
.rapid-card
  width 350px
  .card
    border 0
    border-radius 20px
    overflow hidden
    .card-header
      padding-top 40px
      padding-bottom 0px
      text-align center
      border 0
    .card-body
      padding-bottom 40px
    .card-header
    .card-body
      padding-left 24px
      padding-right 24px
      background-color colorPrimary
  ul
    li
      position relative
      padding-left 1.5rem
      &:before
        position absolute
        left 0
        top 0
        content attr(data-index)
        display inline-block
</style>