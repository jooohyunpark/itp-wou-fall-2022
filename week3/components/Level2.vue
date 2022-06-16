<template>
  <div class="level-2">
    <h2>Level 2</h2>

    <p v-for="(item, i) of log" :key="i">{{ item }}</p>

    <Level3 />
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
    this.$nuxt.$on("hello-level2", (val) => {
      this.log.unshift(`event received with value: ${val}`);
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("hello-level2");
  },
};
</script>

<style lang="scss" scoped>
.level-2 {
  border: 3px solid pink;
  padding: 20px;
}
</style>
