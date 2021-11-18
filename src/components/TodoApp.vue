<template>
  <div id="todo">
    <h1>{{title}}</h1>
    <div class="addElement">
      <input
        class="input"
        type="text"
        placeholder="todo"
        v-model="newItem"
      >
      <button @click="addItem"> dodaj </button>
    </div>

    <!-- <TodoItem
      v-for="item in items"
      v-bind:key="item.id"
      @removeClicked="markAsCompleted(item.id)"
    /> -->
    <div
      class="item"
      v-bind:class="{completed: item.completed} "
      v-for="item in items"
      v-bind:key="item.id"
      @click="markAsCompleted(item.id)"
    >
      <p>{{item.title}} {{ item.id }}</p>
      <button
        v-if="!item.completed"
        @click="markAsCompleted"
      > zrobione</button>

    </div>

  </div>
</template>

<script>
// import TodoItem from "./TodoItem.vue";
export default {
  //   components: {
  //     TodoItem,
  //   },
  name: "App",
  data() {
    return {
      title: "Welcome on todo list",
      newItem: "",
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },

  methods: {
    addItem() {
      this.items.push({
        title: this.newItem,
        completed: false,
        id: Math.floor(Math.random() * 10000000),
      });
      this.newItem = "";
    },
    markAsCompleted(id) {
      const index = this.items.findIndex((el) => el.id == id);
      this.items[index].completed = true;
    },
  },
};
</script>

<style lang="scss">
#todo {
  margin: auto;
  width: 400px;
  .addElement {
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;

    justify-content: center;
    .input {
      width: 200px;
    }
  }
  .item {
    font-weight: bold;
    color: rgb(54, 54, 54);
    max-width: 200px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(131, 127, 127);
    text-align: center;
    padding: 10px 5px;
    background-color: rgb(207, 207, 207);
    margin: auto;
    margin-top: 10px;
  }
  .completed {
    opacity: 0.2;
  }
  .completed p {
    text-decoration: line-through;
  }
}
</style>
