<template>
  <div>
    <h1>week 3</h1>

    <button @click="emitEvent1">emit event</button>
    <button @click="emitEvent2">emit event with value</button>

    <Section />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    emitEvent1() {
      console.log("emit event 1");
      $nuxt.$emit("event-1");
    },
    emitEvent2() {
      console.log("emit event 2");
      $nuxt.$emit("event-2", 100);
    },
  },
};
</script>
