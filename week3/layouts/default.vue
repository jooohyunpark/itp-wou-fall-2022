<template>
  <div :class="`app ${mode}`">
    <Nav />
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: "light",
    };
  },
  mounted() {
    this.$nuxt.$on("toggle-mode", (value) => {
      this.mode = value ? "dark" : "light";
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("toggle-mode");
  },
};
</script>
<style lang="scss">
.app {
  min-height: 100vh;

  &.light {
    color: #000;
    background: #fff;
  }

  &.dark {
    color: #fff;
    background: #000;
  }
}
</style>
