import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const url = "https://jsonplaceholder.typicode.com/";
const state = {
  posts: [],
  authors: [],
  pageOn: 1,
  totalPages: 1,
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
      const showAmountPosts = (posts) => {
        let maxRange = state.amountPostsOnPage * state.pageOn;
        let minRage = 0;
        if (state.pageOn === 1) {
          minRage = 0;
        }
        if (state.pageOn > 1) {
          minRage = maxRange - 11;
        }
        return posts.slice(minRage, maxRange);
      };

      showAmountPosts(signedPosts);

      return showAmountPosts(signedPosts);
    }
  },
};
const actions = {
  getPosts(context) {
    axios.get(`${url}posts`).then((res) => {
      context.commit("SET_POSTS", res.data);
      context.commit("SET_PAGE_AMOUNT", res.data);
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
    context.commit("SET_PAGE_AMOUNT", this.state.posts);
  },
  changePage(context, direction) {
    switch (direction) {
      case "NEXT":
        context.commit("NEXT_PAGE");
        break;
      case "PREV":
        context.commit("PREV_PAGE");
        break;
    }
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
  SET_PAGE_AMOUNT(state, posts) {
    const postsNumber = posts.length;
    const amountPosts = state.amountPostsOnPage;
    const modulo = postsNumber % amountPosts;
    let ifModulo = 0;
    if (modulo > 0) {
      ifModulo = 1;
    }
    state.totalPages = Number(Math.floor(postsNumber / amountPosts)) + ifModulo;
  },

  NEXT_PAGE(state) {
    if (state.pageOn < state.totalPages) {
      state.pageOn++;
    }
  },
  PREV_PAGE(state) {
    if (state.pageOn > 1) {
      state.pageOn--;
    }
  },
};

export const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
