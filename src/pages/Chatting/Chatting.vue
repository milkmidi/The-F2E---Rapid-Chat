<script>
import Vuex from 'vuex';
import ChatControl from '@/components/ChatControl';
import UserPanel from '@/components/UserPanel';
import Countdown from '@/components/Countdown';
import UserPanelContainer from '@/containers/UserPanelContainer';
import ChatList from '@/components/ChatList';
import Emoticon from '@/components/Emoticon';
import Timesup from '@/components/Timesup';
import MatchCard from '@/components/MatchCard';
import UserPanelCountdown from '@/components/UserPanelCountdown';

import {
  CHAT_MESSAGE,
  CHAT_IMAGE,
  CHAT_FILE,
  CHAT_EMOTICON,
} from '@/utils/types';


export default {
  props: {},
  data: () => ({
    showEmoticon: false,
    showTimesup: false,
    showMatch: false,
    timeScale: process.env.DEV_MODE ? 100 : 1,
  }),
  watch: {
    chatList() {
      this.$nextTick(() => {
        this.$refs.chatListWrap.scrollTop = this.$refs.chatListWrap.scrollHeight;
      });
    },
  },
  computed: {
    ...Vuex.mapState(['chatList']),
  },
  methods: {
    ...Vuex.mapMutations(['pushChatList']),
    ...Vuex.mapActions(['fetchChatHistory']),
    timeup() {
      this.showTimesup = true;
    },
    send(message:string) {
      this.pushChatList({
        id: (+new Date()).toString(),
        type: CHAT_MESSAGE,
        me: true,
        message,
      });
    },
    attachFile() {
      this.pushChatList({
        id: (+new Date()).toString(),
        type: CHAT_FILE,
        me: true,
        fileName: 'hi-9527.zip',
        fileSize: '9527kb',
      });
    },
    insertPhoto() {
      this.pushChatList({
        id: (+new Date()).toString(),
        type: CHAT_IMAGE,
        me: true,
        image: 'https://fakeimg.pl/250x100/ff0000',
      });
    },
    insertEmoticon() {
      this.showEmoticon = !this.showEmoticon;
    },
    sticker(stickerId:string) {
      this.pushChatList({
        id: (+new Date()).toString(),
        type: CHAT_EMOTICON,
        me: true,
        emoticon: `sticker-${stickerId}`,
      });
      this.showEmoticon = false;
    },
    timesupConfirm(result:boolean) {
      this.showTimesup = false;
      this.showMatch = result;
    },
    next() {
      this.$router.replace('/settingup');
    },
  },
  async created() {
    await this.fetchChatHistory();
  },
  components: {
    ChatList,
    ChatControl,
    UserPanel,
    Countdown,
    UserPanelContainer,
    Emoticon,
    MatchCard,
    Timesup,
    UserPanelCountdown,
  },
};
</script>

<template lang="pug">
.chatting.container.p-4
  transition(name="fade")
    .pop.fill-100.flex-center(v-if="showTimesup")
      Timesup(@confirm="timesupConfirm")
  transition(name="fade")
    .pop.fill-100.flex-center(v-if="showMatch")
      MatchCard(@next="next")
  .row.h-100
    .col-4
      .left.d-flex.flex-column.h-100
        .mb-4
          UserPanelCountdown(@timeup="timeup" :scale="timeScale")
        .flex-grow-1
          UserPanelContainer
        .sprite.logo-rapid-chat
    .col-8
      .right.border-radius.p-4.h-100.d-flex.flex-column
        .chat-list-wrap(ref="chatListWrap")
          .chat-list-content
            ChatList(:list="chatList")
        .emoticon-wrap(v-show="showEmoticon")
          Emoticon(@sticker="sticker")
        ChatControl.mt-4(
          @send="send"
          @attachFile="attachFile"
          @insertPhoto="insertPhoto"
          @insertEmoticon="insertEmoticon"
        )
</template>

<style lang="stylus">
.chatting
  .right
    position relative
    background-color colorPrimary
  .chat-list-wrap
    scrollbar(12px, darken(colorPrimary, 20), white)
    flex 1 0 0
    overflow auto
    position relative
    .chat-list-content
      position absolute
      width 100%
      top 0
      left 0
  .emoticon-wrap
    position absolute
    left 1.5rem
    bottom 80px
    width calc(100% - 3rem - 12px)
  .pop
    position fixed
    z-index 99
    background-color alpha(black, 0.8)
</style>