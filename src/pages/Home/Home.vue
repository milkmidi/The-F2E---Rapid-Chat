<script>
import RapidChatInfo from '@/components/RapidChatInfo';

export default {
  methods: {
    startHandler() {
      this.$router.push('/login');
    },
  },
  components: {
    RapidChatInfo,
  },
};
</script>

<template lang="pug">
.home.flex-center
  RapidChatInfo(@start="startHandler")
</template>

