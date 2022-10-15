<template>
  <nav>
    <h1>Other use cases</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <span>/</span>
    <NuxtLink to="/p5">p5</NuxtLink>
    <span>/</span>
    <NuxtLink to="/p5-embed">p5 embed</NuxtLink>
    <span>/</span>
    <NuxtLink to="/three">three</NuxtLink>
    <span>/</span>
    <NuxtLink to="/three-2">three (ver 2)</NuxtLink>
  </nav>
</template>
<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
nav {
  padding: 24px 0;
  text-align: center;
}
</style>
