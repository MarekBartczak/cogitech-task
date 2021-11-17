<template>
  <div class="post">
    <p> {{post.title}} </p>
    <p>{{post.body}}</p>

    <button>usuń post</button>
  </div>
</template>


<script>
export default {
  props: ["post"],
};
</script>