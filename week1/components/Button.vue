<template>
  <button :class="type">{{ text }}</button>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 30px;
  border-radius: 20px;
  cursor: pointer;
}

.primary {
  background: black;
  color: white;
  border: none;
}
button.primary:hover {
  background: blue;
}

button.outline {
  color: black;
  border: 1px solid black;
}
button.outline:hover {
  color: white;
  border: 1px solid blue;
  background: blue;
}
</style>
