// @flow
import Vuex, { MutationTree, ActionTree } from 'vuex';
import Vue from 'vue';
import matchMediaPlugin from './plugins/matchMediaPlugin';
import initPlugin from './plugins/initPlugin';

Vue.use(Vuex);


export type TypeState = {
  loading: boolean,
  mobile: boolean,
  mouseRange: {x:number, y:number},
  windowInnerWidth: number,
  windowInnerHeight: number,
}


const defaultState:TypeState = {
  loading: true,
  mobile: false,
  windowInnerWidth: window.innerWidth,
  windowInnerHeight: window.innerHeight,
  mouseRange: {
    x: 0, // range [-1, 1]
    y: 0, // range [-1, 1]
  },
};

// vue 裡用 this.$store.commit('loading' , true)
const mutations:MutationTree<TypeState> = {
  setLoading(state:TypeState, value:boolean) {
    state.loading = value;
  },
  setMobile(state:TypeState, value:boolean) {
    state.mobile = value;
  },
  setMouseRange(state:TypeState, range:{x:number, y:number}) {
    state.mouseRange = range;
  },
  setWindowSize(state:TypeState) {
    state.windowInnerWidth = window.innerWidth;
    state.windowInnerHeight = window.innerHeight;
  },
};

/*
  vue 裡用 this.$store.dispatch('loading' , true)
  methods(){
    ...Vuex.mapActions(['loading']),
  }
*/
const actions:ActionTree<TypeState> = {
  testAction({ commit, dispatch, state }, text) {
  },

};

/**
  computed:{
    ...Vuex.mapGetters(['loading'])
  },
*/
const getters = {
  mouseRangeX: ({ mouseRange }) => mouseRange.x,
  mouseRangeY: ({ mouseRange }) => mouseRange.y,
};

export default new Vuex.Store<TypeState>({
  state: defaultState,
  getters,
  actions,
  mutations,
  plugins: [matchMediaPlugin, initPlugin],
});
