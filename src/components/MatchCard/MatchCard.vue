<script>
import RapidCard from '../RapidCard';
import UserIcon from '../UserIcon';

export default {
  props: {
    nickName: {
      type: String,
      default: 'nickname',
    },
  },
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
    RapidCard,
    UserIcon,
  },
};
</script>

<template lang="pug">
RapidCard.match-card
  template(v-slot:header)
    .h2.font-bold 
      i MATCH! 
    .h6 BOTH OF YOU CHOOSE TO EXCHANGE !
  template(v-slot:body)
    .text-center
      .mb-4
        UserIcon
        .h3.font-bold {{nickName}}
      .middle.flex-center
        .sprite.ic-fb.mr-2
        span nekoneko666
      .btn.btn-black.w-100.effect-bubble(@click="$emit('next')") NEXT CHAT
</template>

<style lang="stylus">
.match-card
  .middle
    background-color white
    padding 5px 0
    margin 10px -25px 30px
</style>