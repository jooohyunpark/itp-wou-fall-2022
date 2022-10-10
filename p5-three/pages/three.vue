<template>
  <div class="three-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>three.js example</h2>
          <a
            href="https://threejs.org/examples/?q=point#webgl_points_billboards"
            >Original code from three.js particle billboards example</a
          >

          <p>
            Codes are written in a separate JS file, then imported to the
            component with functions.
          </p>
        </div>

        <div ref="container" class="three-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import stars from "../scripts/stars";

export default {
  data() {
    return {};
  },
  mounted() {
    stars.init(this.$refs.container);
    stars.animate();
  },
  methods: {},
  beforeDestroy() {
    stars.clear();
  },
};
</script>

<style scoped lang="scss">
.three-page {
  .three-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  p {
    margin-top: 40px;
    background: black;
    color: white;
  }
}
</style>
