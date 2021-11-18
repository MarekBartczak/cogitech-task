<template>
  <div>
    <p>POSTS</p>
    <div id="postsList">
      <Post
        v-for="post in posts"
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
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>