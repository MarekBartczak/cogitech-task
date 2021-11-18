import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  posts: [],
};
const getters = {};
const actions = {
  getPosts({ commit }) {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      commit("SET_POSTS", res.data);
    });
  },
};
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
};

export const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
