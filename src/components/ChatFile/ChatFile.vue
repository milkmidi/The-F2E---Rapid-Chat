<script>
export default {
  functinal: true,
  components: {
    ChatMessage: require('../ChatMessage').default,
  },
};
</script>

<template lang="pug" functional>
//- ChatMessage.chat-file(:dark="props.dark")
.d-flex.chat-file
  i.material-icons description
  div
    .font-bold {{props.fileName}}
    span {{props.fileSize}}
</template>

<style lang="stylus">
.chat-file
  .material-icons
    font-size: 46px
</style>