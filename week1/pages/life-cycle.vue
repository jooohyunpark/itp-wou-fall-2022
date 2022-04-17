<template>
  <div ref="div">See life cycle on console</div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      number: 100,
    };
  },
  beforeCreate() {
    console.log("--- beforeCreate ---");
    console.log("this.number: ", this.number);
    console.log("this.$refs.div: ", this.$refs.div);
  },
  created() {
    console.log("--- created ---");
    console.log("this.number: ", this.number);
    console.log("this.$refs.div: ", this.$refs.div);
  },
  mounted() {
    console.log("--- mounted ---");
    console.log("this.number: ", this.number);
    console.log("this.$refs.div: ", this.$refs.div);
  },
  beforeDestroy() {
    console.log("--- beforeDestroy ---");
    console.log("this.number: ", this.number);
    console.log("this.$refs.div: ", this.$refs.div);
  },
  destroyed() {
    console.log("--- destoyed ---");
    console.log("this.number: ", this.number);
    console.log("this.$refs.div: ", this.$refs.div);
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
