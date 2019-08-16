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
  /* render(h) {
    return (
      h(Loading, {
        props: {
          show: this.$store.state.loading,
        },
      })
    );
  }, */
};
