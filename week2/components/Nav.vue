<template>
  <nav>
    <h1>week 2</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/grid-system">Grid system</NuxtLink>
    <NuxtLink to="/bootstrap-ui">Bootstrap UI</NuxtLink>
    <NuxtLink to="/p5">p5</NuxtLink>
    <NuxtLink to="/three">three</NuxtLink>
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
