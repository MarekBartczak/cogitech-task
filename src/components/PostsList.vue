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
import axios from "axios";
import Post from "./Post.vue";
export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: null,
    };
  },
  mounted() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      console.log(res);
      return (this.posts = res.data);
    });
  },
};
</script>