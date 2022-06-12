<template>
  <nav>
    <h1>week 1</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/life-cycle">Life cycle</NuxtLink>
    <NuxtLink to="/directives">Directives</NuxtLink>
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
