import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const url = "https://jsonplaceholder.typicode.com/";
const state = {
  posts: [],
  authors: [],
  page: 1,
  amountPostsOnPage: 10,
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
  getPosts(context) {
    axios.get(`${url}posts`).then((res) => {
      context.commit("SET_POSTS", res.data);
    });
  },
  getAuthors(context) {
    axios.get(`${url}users`).then((res) => {
      context.commit(
        "SET_AUTHORS",
        res.data.map((el) => {
          return { id: el.id, name: el.name };
        })
      );
    });
  },
  removePost(context, id) {
    context.commit("REMOVE_POST", id);
  },
};

const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_AUTHORS(state, authors) {
    state.authors = authors;
  },
  REMOVE_POST(state, id) {
    const index = state.posts.findIndex((post) => post.id === id);
    state.posts.splice(index, 1);
  },
};

export const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
