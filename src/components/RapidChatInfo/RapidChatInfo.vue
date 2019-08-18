<script>
import RapidCard from '../RapidCard';

export default {
  components: {
    RapidCard,
  },
};
</script>

<template lang="pug">
RapidCard
  template(v-slot:header)
    .sprite.logo-rapid-chat
    .h6 We create a private place to chat.
  template(v-slot:body)
    ul.list-unstyled
      li(data-index="①") Randomly pick a person for you.
      li(data-index="②") Chat anything in ten minutes.
      li(data-index="③") Choose to exchange your contact info or not.
      li(data-index="④") Get the contact info if both of you choose to exchange at the same time.
    .btn.btn-black.effect-bubble.w-100(@click="$emit('start')") 
      |START
      i.material-icons.ml-2 arrow_forward
</template>