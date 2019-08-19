<script>
export default {
  data: () => ({
    input: '',
  }),
  methods: {
    send() {
      if (this.input.trim === '') {
        return;
      }
      this.$emit('send', this.input);
      this.input = '';
    },
  },
};
</script>

<template lang="pug">
.chat-control
  .item.flex-center
    i.material-icons(@click="$emit('attachFile')") attach_file
  .item.flex-center
    i.material-icons(@click="$emit('insertPhoto')") insert_photo
  .item.flex-center
    i.material-icons(@click="$emit('insertEmoticon')") insert_emoticon
  input(v-model="input" @keydown.enter="send")
  .item.flex-center.chat-control__send
    i.material-icons(@click="send" :class="{disable:input===''}") send
  
</template>

<style lang="stylus">
$height = 40px
.chat-control
  display flex
  justify-content center
  align-content center
  position relative
  input
    flex 1 1
    border 1px solid
    border-color transparent
    border-radius 10px
    padding 0 10px
    height $height
    line-height $height
    &:focus
      border-color darken(colorPrimary, 10)
      outline none
  .item
    width 40px
    height @width
    border-radius 50%
    margin 0 2px
    cursor pointer
    i
      line-height $height
      &.disable
        opacity 0.3
        pointer-events none
    &:hover
      background-color black
      color white
  .chat-control__send
    position absolute
    top 0
    right 0
</style>