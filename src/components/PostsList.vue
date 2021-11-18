<template>
  <div>
    <p>POSTS</p>
    <div id="postsList">
      <Post
        v-for="post in signedPostsByAuthor"
        v-bind:key="post.id"
        :post="post"
      />

    </div>
  </div>
</template>


<script>
import Post from "./Post.vue";
export default {
  name: "PostList",
  components: {
    Post,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    signedPostsByAuthor() {
      return this.$store.getters.signedPostsByAuthor;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getAuthors");
  },
};
</script>