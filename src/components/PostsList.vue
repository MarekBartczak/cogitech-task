<template>
  <div>
    <p>POSTS</p>
    <div id="post-list">
      <Post
        v-for="post in signedPostsByAuthor"
        v-bind:key="post.id"
        :post="post"
        @removePostClicked="removePost(post.id)"
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
  methods: {
    removePost(id) {
      this.$store.dispatch("removePost", id);
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