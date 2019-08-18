<script>
import Vuex from 'vuex';
import RapidChatLogin from '@/components/RapidChatLogin';

export default {
  methods: {
    ...Vuex.mapMutations(['setNickName', 'setSocialName']),
    startHandler({ nickName, socialName }:{nickName:string, socialName:string}) {
      this.setNickName(nickName);
      this.setSocialName(socialName);
      this.$router.push('/settingup');
    },
  },
  components: {
    RapidChatLogin,
  },
};
</script>

<template lang="pug">
.login.flex-center
  RapidChatLogin(@start="startHandler" @keydown.enter="startHandler")
</template>
