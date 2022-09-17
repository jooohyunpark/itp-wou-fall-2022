<template>
  <div>
    <h2>Components</h2>

    <Button text="This my button" />
    <Button text="Another button" />
    <Button type="outline" text="Type outline" />
    <Button type="outline" text="It's reusable!" />
  </div>
</template>

<script>
export default {
  name: "components",
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
