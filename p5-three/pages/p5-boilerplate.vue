<template>
  <div class="p5-page">
    <div class="container">
      <div class="row">
        <h4>p5 boilerplate</h4>
        <p>This is an p5.js starter page. Check the code.</p>
        <div id="p5-canvas" class="col" ref="canvas"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const sketch = (p5) => {
      /* 
      add p5. in all p5js specific functions/variables
       */
      p5.setup = () => {
        const canvas = p5.createCanvas(width, height);
        canvas.parent("p5-canvas");

        // Your setup code here
        p5.colorMode(p5.HSB);
      };

      p5.draw = () => {
        // Your draw code here
      };

      p5.mousePressed = () => {
        // mouse press
      };

      p5.windowResized = () => {
        // resize
        const { width, height } = this.$refs.canvas.getBoundingClientRect();
        p5.resizeCanvas(width, height);
      };
    };

    // NOTE: Use p5 as an instance mode
    const P5 = require("p5");
    new P5(sketch);
  },
};
</script>

<style scoped lang="scss">
.p5-page {
  margin: 80px 0;

  #p5-canvas {
    width: 100%;
    height: 500px;
  }
}
</style>
