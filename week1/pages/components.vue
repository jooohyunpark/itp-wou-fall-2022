<template>
  <div>
    <h2>Components</h2>

    <Button text="This my button" />
    <Button text="Another button" />
    <Button type="outline" text="Type outline" />
    <Button type="outline" text="It's reusable!" @click.native="onClick" />
  </div>
</template>

<script>
export default {
  name: "components",
  methods: {
    onClick() {
      console.log("clicked!");
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
