<script>
import RapidCard from '../RapidCard';
import Input from '../Input';


export default {
  data: () => ({
    nickName: process.env.DEV_MODE ? 'milkmidiNo.1' : '',
    socialName: process.env.DEV_MODE ? 'instagram' : '',
    socialList: ['facebook', 'instagram', 'line'],
  }),

  components: {
    RapidCard,
    Input,
  },
};
</script>

<template lang="pug">
RapidCard.rapid-chat-login
  template(v-slot:header)
    .sprite.logo-rapid-chat
    .h6 We create a private place to chat.
  template(v-slot:body)
    .h6
      strong YOUR CONTACT INFO→
    Input(placeholder="NickName" v-model="nickName" v-on="$listeners")
    .social.mb-4
      template(v-for="type in socialList")
        .fab(
          @click="socialName=type"
          :class="{on:socialName===type, ['fa-'+type]:true}")
    .btn.btn-black.effect-bubble.w-100(@click="$emit('start',{nickName,socialName})") 
      |START
      i.material-icons.ml-2 arrow_forward
</template>

<style lang="stylus">
.rapid-chat-login
  .input-wrap
    position relative
  .social
    height 24px
    .fab
      width 28px
      height @width
      text-align center
      font-size 20px
      line-height 20px
      cursor pointer
      padding 4px
      border-radius 50%
      opacity 0.5
      &:before
        line-height 22px
      &.on
        opacity 1
        background-color black
        color white
      &:hover
        opacity 1
    .fab + .fab
      margin-left 5px
</style>