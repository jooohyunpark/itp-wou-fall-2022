<template>
  <button type="button" class="btn btn-primary">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
