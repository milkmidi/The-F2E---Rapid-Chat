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
.rapid-chat-info
  .card
    .card-header
      .sprite.logo-rapid-chat
      .h6 We create a private place to chat.
    .card-body
      ul.list-unstyled
        li(data-index="①") Randomly pick a person for you.
        li(data-index="②") Chat anything in ten minutes.
        li(data-index="③") Choose to exchange your contact info or not.
        li(data-index="④") Get the contact info if both of you choose to exchange at the same time.
      .btn.btn-black.btn-black--arrow START
</template>

<style lang="stylus">
.rapid-chat-info
  max-width 350px
  .card
    border 0
    border-radius 20px
    overflow hidden
    .card-header
      padding-top 40px
      text-align center
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