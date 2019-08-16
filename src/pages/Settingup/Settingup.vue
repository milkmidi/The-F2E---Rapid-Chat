<script>
import Vuex from 'vuex';
import UserPanel from '@/components/UserPanel';

export default {
  computed: {
    ...Vuex.mapState([
      'nickName',
      'socialName',
    ]),
  },
  methods: {
    ...Vuex.mapMutations(['setLoading', 'setLoadingSearch']),
  },

  mounted() {
    this.setLoadingSearch(true);
    setTimeout(() => {
      this.setLoadingSearch(false);
      this.$router.push('/chatting');
    }, 2000);
  },
  components: {
    UserPanel,
  },
};
</script>

<template lang="pug">
.settingup.flex-center.flex-column
  .sprite.logo-rapid-chat
  .h6.d-flex Setting up a chatting room for you…
    i.material-icons search
  UserPanel(:nickName="nickName", :socialName="socialName")
</template>

