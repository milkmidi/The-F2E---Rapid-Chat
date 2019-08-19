// @flow
import Vuex, { MutationTree, ActionTree } from 'vuex';
import Vue from 'vue';
import { type ChatType } from '@/utils/types';
import { generateMockData, mockData } from '@/components/ChatList/mockData';


Vue.use(Vuex);


export type TypeState = {
  nickName: string,
  socialName: string,
  loading: boolean,
  loadingSearch: boolean,
  chatList: ChatType[],
  //
  socketConnected:boolean,

}


const defaultState:TypeState = {
  nickName: '',
  socialName: '',
  loading: false,
  loadingSearch: false,
  chatList: [],
  //
  socketConnected: false,
};

const mutations:MutationTree<TypeState> = {
  setNickName(state:TypeState, payload:string) {
    state.nickName = payload;
  },
  setSocialName(state:TypeState, payload:string) {
    state.socialName = payload;
  },
  setLoading(state:TypeState, payload:boolean) {
    state.loading = payload;
  },
  setLoadingSearch(state:TypeState, payload:boolean) {
    state.loadingSearch = payload;
  },
  setChatList(state:TypeState, payload:ChatType[]) {
    state.chatList = payload;
  },
  pushChatList(state:TypeState, payload:ChatType) {
    state.chatList.push(payload);
    const time: number = Math.floor(Math.random() * 2000) + 500;
    setTimeout(() => {
      state.chatList.push(generateMockData(false));
    }, time);
  },
  //
  socket_connect(state:TypeState) {
    state.socketConnected = true;
  },
  socket_action(state:TypeState, payload) {
    const { type, data } = payload;
    console.log(type, data);
    /* switch (type) {
      case 'connect':
      case 'switchPage':
      case 'vote':
        Object.keys(payload).forEach((key) => {
          state[key] = payload[key];
        });
        break;
      default:
        break; */
    // }
  },
};

const actions:ActionTree<TypeState> = {
  fetchChatHistory({ commit }) {
    commit('setLoading', true);
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('setLoading', false);
        const mockdataResult:ChatType[] = mockData(10);
        commit('setChatList', mockdataResult);
        resolve(mockdataResult);
      }, 1000);
    });
  },
};

const getters = {
};

export default new Vuex.Store<TypeState>({
  state: defaultState,
  getters,
  actions,
  mutations,
});
