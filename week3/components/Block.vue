<template>
  <div>Block</div>
</template>

<script>
export default {
  mounted() {
    this.$nuxt.$on("event-2", (val) => {
      console.log("event 2 received!", val);
    });
  },
};
</script>

<style></style>
