
<template>

  <div
    class="item"
    v-bind:class="{completed: item.completed} "
  >
    <p>{{item.title}} {{ item.id }}</p>
    <button
      v-if="!item.completed"
      @click="markAsCompleted"
    > zrobione</button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    markAsCompleted() {
      this.$emit("removeClicked");
    },
  },
};
</script>
