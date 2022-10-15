<template>
  <div class="p5-page">
    <div class="container">
      <div class="row">
        <div class="title col-12">
          <h2>Your p5.js project</h2>
        </div>
        <div class="description col-12 col-lg-6">
          <p>
            p5.js is a JavaScript library for creative coding, with a focus on
            making coding accessible and inclusive for artists, designers,
            educators, beginners, and anyone else! p5.js is free and open-source
            because we believe software, and the tools to learn it, should be
            accessible to everyone.
          </p>
          <p>
            Using the metaphor of a sketch, p5.js has a full set of drawing
            functionality. However, you’re not limited to your drawing canvas.
            You can think of your whole browser page as your sketch, including
            HTML5 objects for text, input, video, webcam, and sound.
          </p>
        </div>
      </div>

      <div class="row">
        <h4>Click!</h4>
        <div id="p5-canvas" class="col" ref="canvas"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const p = [];
    const { width, height } = this.$refs.canvas.getBoundingClientRect();
    let randomColor = 100;

    const sketch = (p5) => {
      p5.setup = () => {
        const canvas = p5.createCanvas(width, height);
        canvas.parent("p5-canvas");

        p5.colorMode(p5.HSB);
      };

      p5.draw = () => {
        p5.background(255, 204, 100);
        recordParticles();
        drawParticles();
        killParticles();
      };

      p5.mouseReleased = () => {
        randomColor = p5.random(360);
      };

      p5.windowResized = () => {
        const { width, height } = this.$refs.canvas.getBoundingClientRect();
        p5.resizeCanvas(width, height);
      };

      function recordParticles() {
        if (p5.mouseIsPressed) {
          for (var i = 0; i < 5; i++) {
            p.push(new Particle(p5.mouseX, p5.mouseY));
          }
        }
      }

      function drawParticles() {
        p.forEach(function (i) {
          let noise = p5.createVector(
            p5.random(-0.5, 0.5),
            p5.random(-0.5, 0.5)
          );
          i.applyForce(noise);
          let friction = i.vel.copy();
          friction.mult(-0.015);
          i.applyForce(friction);
          i.update();
          i.show();
        });
      }

      function killParticles() {
        for (var i = p.length - 1; i >= 0; i--) {
          if (p[i].r === 0) {
            p.splice(i, 1);
          }
        }
      }

      function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.r = 1;
        this.maxR = p5.random(5, 10);
        this.color = randomColor;
        this.alpha = 1;
        this.switch = false;
        this.pos = p5.createVector(this.x, this.y);
        this.vel = p5
          .createVector(
            p5.pmouseX + p5.random(-5, 5),
            p5.pmouseY + p5.random(-5, 5)
          )
          .sub(p5.createVector(p5.mouseX, p5.mouseY));
        this.acc = p5.createVector();

        this.show = function () {
          p5.noStroke();
          p5.fill(this.color, 100, 100, this.alpha);
          p5.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
        };

        this.update = function () {
          this.vel.add(this.acc);
          this.vel.limit(5);
          this.pos.add(this.vel);
          this.acc.mult(0);
          if (this.switch == false) {
            if (this.r < this.maxR) {
              this.r += 1;
            } else {
              this.switch = true;
            }
          } else {
            if (this.r > 0) {
              this.r -= 0.2;
            } else {
              this.r = 0;
            }
          }
        };

        this.applyForce = function (f) {
          this.acc.add(f);
        };
      }
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

  .title {
    margin-bottom: 20px;
  }

  .description {
    margin-bottom: 40px;
  }

  #p5-canvas {
    width: 100%;
    height: 500px;
  }
}
</style>
