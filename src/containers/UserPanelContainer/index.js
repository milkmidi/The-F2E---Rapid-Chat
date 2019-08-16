import UserPanel from '@/components/UserPanel';

export default {
  render() {
    return (
      <UserPanel
        nickName={this.$store.state.nickName}
        socialName={this.$store.state.socialName}
        />
    );
  },
};
