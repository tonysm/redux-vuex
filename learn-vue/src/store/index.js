import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  posts: [],
  comments: []
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters: {
    postByCode: (state, getters) => (code) => {
      return state.posts.find((post) => post.code === code);
    },
    postCommentsByCode: (state, getters) => (code) => {
      return state.comments[code] || [];
    }
  }
});
