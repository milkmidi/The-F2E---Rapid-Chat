// @flow
import Vuex, { MutationTree, ActionTree } from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


export type TypeState = {
}


const defaultState:TypeState = {
};

const mutations:MutationTree<TypeState> = {

};

const actions:ActionTree<TypeState> = {

};

const getters = {
};

export default new Vuex.Store<TypeState>({
  state: defaultState,
  getters,
  actions,
  mutations,
});
