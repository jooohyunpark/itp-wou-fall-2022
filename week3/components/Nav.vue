<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="col nav-content">
          <NuxtLink to="/"><h1>Demo site</h1></NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
.nav-content {
  margin: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
  }
}
</style>
