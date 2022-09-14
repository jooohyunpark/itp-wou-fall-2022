<template>
  <a :href="href" role="button" class="btn btn-outline-dark">{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
button {
  margin: 60px 0;

  span {
    font-size: 12px;
  }
}
</style>
