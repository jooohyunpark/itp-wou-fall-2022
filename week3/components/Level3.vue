<template>
  <div class="level-3">
    <h2>Level 3</h2>
    <button @click="emitHelloRoot">hello Root</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      log: [],
    };
  },
  methods: {
    emitHelloRoot() {
      this.$nuxt.$emit("hello-root");
    },
  },
};
</script>

<style lang="scss" scoped>
.level-3 {
  border: 3px solid blue;
  padding: 20px;
}
</style>
