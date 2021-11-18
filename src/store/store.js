import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  posts: [],
  authors: [],
};
const getters = {
  signedPostsByAuthor: (state) => {
    if (state.posts.length > 0 && state.authors.length > 0) {
      const signedPosts = state.posts.map((el) => {
        let name = "";

        for (let i = 0; i < state.authors.length; i++) {
          if (el.userId === state.authors[i].id) {
            name = state.authors[i].name;
          }
        }
        el.author = name;
        return el;
      });
      return signedPosts;
    }
  },
};
const actions = {
  getPosts({ commit }) {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      commit("SET_POSTS", res.data);
    });
  },
  getAuthors({ commit }) {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      commit(
        "SET_AUTHORS",
        res.data.map((el) => {
          return { id: el.id, name: el.name };
        })
      );
    });
  },
};
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_AUTHORS(state, authors) {
    state.authors = authors;
  },
};

export const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
