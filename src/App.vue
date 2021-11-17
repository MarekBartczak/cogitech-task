<template>
  <div>
    <h1>show posts</h1>
    <PostList />
  </div>
</template>


<script>
import PostList from "./components/PostsList.vue";
export default {
  components: {
    PostList,
  },
};
</script>
