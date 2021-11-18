<template>
  <div class="post">
    <div id="body-post">
      <p id="post-title"> {{post.title}} </p>
      <p id="post-author"> {{post.author}} </p>

      <div id="post-body">
        <p v-if="!showMore"> {{post.body.substring(0,30) + "..."}}
        </p>
        <p v-if="showMore"> {{post.body}}
        </p>

      </div>

      <button
        @click="showMoreToggle"
        id="show-more-btn"
      >{{showMoreButtonName[ showMore ? 1 : 0]}}</button>
    </div>
    <div id="delete-post">
      <button id="delete-post-btn">usuń post</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showMore: false,
      showMoreButtonName: ["zobacz więcej", "zobacz mniej"],
    };
  },
  props: ["post"],
  methods: {
    showMoreToggle() {
      this.showMore = !this.showMore;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.post {
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 5px rgb(192, 192, 192);
  border-radius: 5px;
  padding: 10px;
  margin: 20px 5px;
  #body-post {
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
      box-shadow: 0px 0px 5px rgb(192, 192, 192);
    }

    #post-body {
      padding: 0;
    }
    #show-more-btn {
      padding: 0;
      border: none;
      background: none;
      color: rgb(79, 90, 91);
    }
    #show-more-btn:hover {
      color: rgb(155, 174, 176);
    }
    #show-more-btn:active {
      color: rgb(79, 90, 91);
    }
  }
  #delete-post {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    #delete-post-btn {
      border: none;
      padding: 5px 10px;
      border-radius: 10px;
      background: rgb(226, 226, 226);
    }
    #delete-post-btn:hover {
      background: rgb(192, 192, 192);
    }
    #delete-post-btn:active {
      background: rgb(226, 226, 226);
    }
  }
}
</style>