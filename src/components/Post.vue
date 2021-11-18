<template>
  <div class="post">
    <p id="post-title"> {{post.title}} </p>
    <p id="post-author"> Josh Smith</p>
    <p id="post-body">{{post.body}}</p>

    <button>usuń post</button>
  </div>
</template>


<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.post {
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 5px rgb(192, 192, 192);
  border-radius: 5px;
  padding: 10px;
  margin: 20px 5px;

  #post-author {
    font-weight: bold;
  }

  #post-title {
    background-color: rgb(210, 226, 231);
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 5px 0;
    margin-top: 10px;
  }

  #post-body {
    padding: 0;
  }
}
</style>