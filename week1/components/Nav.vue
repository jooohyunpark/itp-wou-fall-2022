<template>
  <nav>
    <h1>week 1</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <span>/</span>
    <NuxtLink to="/life-cycle">Life cycle</NuxtLink>
    <span>/</span>
    <NuxtLink to="/directives">Directives</NuxtLink>
    <span>/</span>
    <NuxtLink to="/components">Components</NuxtLink>
    <span>/</span>
    <NuxtLink to="/homepage">Home page example</NuxtLink>
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
