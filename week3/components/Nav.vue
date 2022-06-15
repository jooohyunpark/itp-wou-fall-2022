<template>
  <nav>
    <h1>week 3</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/events">Events</NuxtLink>
    <NuxtLink to="/mode">Mode</NuxtLink>
  </nav>
</template>
<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  padding: 24px 0;
  text-align: center;
}
</style>
