<template>
  <div class="three-page">
    <h2>three.js example</h2>
    <a href="https://threejs.org/examples/?q=point#webgl_points_billboards"
      >Original code from three.js particle billboards example</a
    >

    <div ref="container" class="three-container"></div>
  </div>
</template>

<script>
const THREE = require("THREE"); // should be a require (common.js)
import texture from "../assets/img/disc.png"; // https://github.com/mrdoob/three.js/blob/master/examples/textures/sprites/disc.png

export default {
  data() {
    return {
      container: null,
      renderer: null,
      scene: null,
      camera: null,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    this.container = this.$refs.container;

    this.init();
    this.animate();
  },
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        2,
        2000
      );
      this.camera.position.z = 1000;

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("0xffffff");

      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      const sprite = new THREE.TextureLoader().load(texture);

      for (let i = 0; i < 3000; i++) {
        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;

        vertices.push(x, y, z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      let material = new THREE.PointsMaterial({
        size: 10,
        sizeAttenuation: true,
        map: sprite,
        alphaTest: 0.5,
        transparent: true,
        color: 0x0000ff,
      });

      const particles = new THREE.Points(geometry, material);
      this.scene.add(particles);

      //
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.container.appendChild(this.renderer.domElement);

      //
      document.body.addEventListener("pointermove", this.onPointerMove);

      //
      window.addEventListener("resize", this.onWindowResize);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    onPointerMove(event) {
      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = window.innerHeight / 2;

      if (event.isPrimary === false) return;

      this.mouseX = event.clientX - windowHalfX;
      this.mouseY = event.clientY - windowHalfY;
    },

    animate() {
      requestAnimationFrame(this.animate);
      this.render();
    },

    render() {
      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.01;
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.01;
      this.camera.lookAt(this.scene.position);
      this.renderer.render(this.scene, this.camera);
    },
  },
  beforeDestroy() {
    document.body.removeEventListener("pointermove", this.onPointerMove);
    window.removeEventListener("resize", this.onWindowResize);
  },
};
</script>

<style scoped lang="scss">
.three-page {
  text-align: center;

  .three-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
}
</style>
