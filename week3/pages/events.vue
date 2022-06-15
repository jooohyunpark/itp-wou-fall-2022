<template>
  <div class="events">
    <p>Emit event and listen anywhere!</p>
    <button @click="emitHelloLevel1">hello Level 1</button> <br />
    <button @click="emitHelloLevel2">hello Level 2</button> payload:
    <input type="number" v-model="number" /><br />

    <p>These are some components. They are nested.</p>

    <p v-for="(item, i) of log" :key="i">{{ item }}</p>

    <Level1 />
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1,
      log: [],
    };
  },
  mounted() {
    this.$nuxt.$on("hello-root", (val) => {
      this.log.unshift("event received!!");
    });
  },
  methods: {
    emitHelloLevel1() {
      this.$nuxt.$emit("hello-level1");
    },
    emitHelloLevel2() {
      $nuxt.$emit("hello-level2", this.number);
    },
  },
};
</script>
<style lang="scss" scoped>
.events {
  margin: 50px;

  button {
    margin: 10px;
  }
}
</style>
