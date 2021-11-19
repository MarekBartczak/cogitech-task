<template>
  <div class="page-counter">
    <div class="line"></div>
    <div class="navigation">

      <button
        id="back-btn"
        class="nav-btn"
        @click="prevPage"
      >Poprzednia strona</button>

      <div class="page-nr">
        {{currentPage}} z {{pages}}
      </div>

      <button
        id="next-btn"
        class="nav-btn"
        @click="nextPage"
      >Następna strona</button>

    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: ["currentPage", "pages"],
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    prevPage() {
      this.$emit("prevPage");
    },
  },
};
</script>


<style lang="scss">
.page-counter {
  width: 100%;
  display: flex;

  flex-direction: column;
  align-items: flex-end;

  .line {
    width: 100%;
    height: 2px;
    background-color: rgb(156, 156, 156);
  }
  .navigation {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    margin-top: 10px;

    .nav-btn {
      border: none;
      background: none;
      color: rgb(79, 90, 91);
      padding: 5px;
    }
    .nav-btn:hover {
      color: rgb(155, 174, 176);
    }
    .nav-btn:active {
      color: rgb(79, 90, 91);
    }
    .page-nr {
      padding: 5px;
      color: rgb(40, 45, 45);
      font-weight: bold;
    }
  }
}
</style>