<template>
  <div class="p5-page">
    <div class="container">
      <div class="row">
        <h4>p5 embed</h4>
        <p>
          Instead of writing code in vue, just embedding in iframe. Source page
          is <a href="https://jooohyunpark.github.io/tropical/">here</a>.
        </p>
        <iframe src="https://jooohyunpark.github.io/tropical/"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style scoped lang="scss">
.p5-page {
  iframe {
    width: 100%;
    height: 700px;
  }
}
</style>
