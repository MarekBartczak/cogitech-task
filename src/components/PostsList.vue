<template>
  <div>
    <p>POSTS</p>
    <div id="post-list">
      <PageCounter
        :pages='totalPages'
        :currentPage='pageOn'
        @nextPage='changePage("NEXT")'
        @prevPage='changePage("PREV")'
      />

      <Post
        v-for="post in signedPostsByAuthor"
        v-bind:key="post.id"
        :post="post"
        @removePostClicked="removePost(post.id)"
      />

      <PageCounter
        :pages='totalPages'
        :currentPage='pageOn'
        @nextPage='changePage("NEXT")'
        @prevPage='changePage("PREV")'
      />

    </div>
  </div>
</template>


<script>
import Post from "./Post.vue";
import PageCounter from "./PageCounter.vue";
export default {
  name: "PostList",
  components: {
    Post,
    PageCounter,
  },
  data() {
    return {
      postsList: this.posts,
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },

    signedPostsByAuthor() {
      return this.$store.getters.signedPostsByAuthor;
    },

    totalPages() {
      return this.$store.state.totalPages;
    },

    pageOn() {
      return this.$store.state.pageOn;
    },
  },

  methods: {
    removePost(id) {
      this.$store.dispatch("removePost", id);
    },
    changePage(direction) {
      this.$store.dispatch("changePage", direction);
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getAuthors");
  },
};
</script>

<style lang="scss">
#post-list {
  display: flex;

  flex-direction: column;
  align-items: center;
}
</style>