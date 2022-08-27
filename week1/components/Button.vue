<template>
  <button>{{ text }}</button>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 30px;
  background: #181818;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>
