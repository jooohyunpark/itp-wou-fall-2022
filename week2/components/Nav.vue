<template>
  <nav>
    <h1>week 2</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <span>/</span>
    <NuxtLink to="/scss">scss</NuxtLink>
    <span>/</span>
    <NuxtLink to="/grid-demo">Grid demo</NuxtLink>
    <span>/</span>
    <NuxtLink to="/grid-system">Grid system</NuxtLink>
    <span>/</span>
    <NuxtLink to="/custom-fonts">Custom fonts</NuxtLink>
    <span>/</span>
    <NuxtLink to="/bootstrap-ui">Bootstrap UI</NuxtLink>
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
