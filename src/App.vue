<template>
  <div>
    <h1>show posts</h1>
    <PostList />
    <!-- <TodoApp /> -->

  </div>
</template>


<script>
import PostList from "./components/PostsList.vue";
// import TodoApp from "./components/TodoApp.vue";
export default {
  components: {
    PostList,
    // TodoApp,
  },
};
</script>
