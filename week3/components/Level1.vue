<template>
  <div class="level-1">
    <h2>Level 1</h2>
    <p v-for="(item, i) of log" :key="i">{{ item }}</p>

    <Level2 />
  </div>
</template>

<script>
export default {
  data() {
    return {
      log: [],
    };
  },
  mounted() {
    this.$nuxt.$on("hello-level1", () => {
      this.log.unshift("event received!");
    });
  },
};
</script>

<style lang="scss" scoped>
.level-1 {
  border: 3px solid green;
  padding: 20px;
}
</style>
