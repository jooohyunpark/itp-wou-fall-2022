<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nuxt.$on("toggle-mode", (value) => {});
  },
  beforeDestroy() {
    this.$nuxt.off("toggle-mode");
  },
};
</script>
