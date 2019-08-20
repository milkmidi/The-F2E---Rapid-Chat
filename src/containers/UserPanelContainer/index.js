import UserPanel from '@/components/UserPanel';

export default {
  methods: {
    submitHandler({ nickName }) {
      this.$store.commit('setNickName', nickName);
    },
  },
  render() {
    return (
      <UserPanel
        nickName={this.$store.state.nickName}
        socialName={this.$store.state.socialName}
        onSubmit={this.submitHandler}
        />
    );
  },
};
