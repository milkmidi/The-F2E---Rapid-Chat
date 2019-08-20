import Loading from '@/components/Loading';

export default {
  render() {
    return (
      <Loading
        show={this.$store.state.loading}
        search={this.$store.state.loadingSearch}
      />
    );
  },
};
