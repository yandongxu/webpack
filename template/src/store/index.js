/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    [types.INCREMENT](state) {
      state.count += 1;
    },
    [types.DECREMENT](state) {
      state.count -= 1;
    }
  },
  actions: {
    increment({ commit }) {
      commit(types.INCREMENT);
    },
    decrement({ commit }) {
      commit(types.DECREMENT);
    }
  },
  strict: debug
});
