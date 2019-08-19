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
  components: {
    RapidCard,
    UserIcon,
  },
};
</script>

<template lang="pug">
RapidCard.timesup
  template(v-slot:header)
    .h2.font-bold 
      i TIME'S UP!
    .h6 EXCHANGE YOUR CONTACT INFO?
  template(v-slot:body)
    .text-center
      .my-4
        UserIcon
        .h3.font-bold {{nickName}}
      .mb-3
        .btn.btn-white.w-100(@click="$emit('confirm', false)")
          i.material-icons.mr-2 cancel
          |ABANDON 
      .btn.btn-black.w-100(@click="$emit('confirm', true)")
        i.material-icons.mr-2 favorite
        |EXCHANGE
</template>
