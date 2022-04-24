<template>
  <div>
    <div>Section</div>

    <Block />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nuxt.$on("event-1", () => {
      console.log("event 1 received!");
    });
  },
};
</script>

<style></style>
