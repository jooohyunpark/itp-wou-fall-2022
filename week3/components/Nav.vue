<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>week 3</h1>
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <NuxtLink to="/emit-event">Emit event</NuxtLink>
          <span>/</span>
          <NuxtLink to="/event-bus">Event bus</NuxtLink>
          <span>/</span>
          <NuxtLink to="/mode">Mode</NuxtLink>
        </div>
      </div>
    </div>
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
