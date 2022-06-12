<template>
  <div class="directives">
    <!-- v-bind -->
    <h2>v-bind</h2>
    <p>Using variable: {{ randomId }}</p>

    <p>Binding class dynamically.</p>
    <div class="v-bind-class-test" :class="className" :id="randomId">
      class: {{ className }}<br />
      id: {{ randomId }}
    </div>

    <p>Pulling image locally.</p>
    <img src="../assets/img/itp.jpg" alt="Old itp floor" :width="300" />

    <p>
      Binding image src from
      <a href="https://picsum.photos/">Lorem Picsum</a> <br />
    </p>
    <img :src="src" alt="Some random Lorem Picsum image" />

    <!-- v-if -->
    <h2>v-if</h2>
    <p>true, so it will appear.</p>
    <div class="box" v-if="true"></div>
    <p>false, so won't render</p>
    <div class="box" v-if="false"></div>

    <!-- v-for -->
    <h2>v-for</h2>
    <p>Iterate through array.</p>
    <div v-for="(item, i) in fruits" :key="i">{{ item }}, {{ i }}</div>

    <p>You can iterate through objects too!</p>
    <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>

    <!-- v-on -->
    <h2>v-on</h2>
    <p>Using click event to update variables.</p>
    <div
      class="v-bind-class-test"
      :class="darkMode ? 'dark' : 'light'"
      :id="randomId"
    >
      class: {{ darkMode ? "dark" : "light" }}<br />
      id: {{ randomId }}
    </div>
    <button @click="toggleMode">Toggle mode</button>
    <button @click="randomizeId">Randomize id</button>

    <p>
      Using click event to get random picsum photos. <br />
      {{ src }}
    </p>
    <img :src="src" alt="Some random Lorem Picsum image" />
    <button @click="getRandomPicsumImage">Get random Picsum Image</button>

    <p>
      We can also toggle show state.<br />
      showbox: {{ show_box }}
    </p>
    <div class="box" v-if="show_box"></div>
    <button @click="toggleShowBox">toggle show_box</button>

    <p>Listening to mouse event</p>
    <div
      :class="`mouse-over-box ${isMouseEnter && 'mouse-over'}`"
      @mouseenter="onMouseEnter"
      @mouseout="onMouseOut"
      @mousemove="onMouseMove"
      @click="onClick"
    >
      Hover me!<br />
      {{ isMouseEnter ? "Mouse entered" : "Mouse exited" }} <br />
      x: {{ mousePos.x }}<br />
      y: {{ mousePos.y }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectivesPage",
  data() {
    return {
      randomId: Math.random(),
      className: "dark",
      show_box: false,
      fruits: ["Banana", "Orange", "Apple", "Mango"],
      myObject: {
        firstName: "Joohyun",
        lastName: "Park",
        class: "Website of You",
      },
      src: "https://picsum.photos/300/200",
      darkMode: true,
      isMouseEnter: false,
      mousePos: {
        x: null,
        y: null,
      },
    };
  },

  methods: {
    toggleShowBox() {
      this.show_box = !this.show_box;
    },
    toggleMode() {
      this.darkMode = !this.darkMode;
    },
    randomizeId() {
      this.randomId = Math.random();
    },
    getRandomPicsumImage() {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
      }
      this.src = `https://picsum.photos/id/${getRandomInt(100)}/300/200`;
    },
    onMouseEnter(e) {
      this.isMouseEnter = true;
    },
    onMouseOut() {
      this.isMouseEnter = false;
      this.mousePos.x = null;
      this.mousePos.y = null;
    },
    onMouseMove(e) {
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY;
    },
    onClick() {
      console.log("clicked!");
    },
  },
};
</script>

<style scoped>
.directives {
  padding: 64px;
}

.box {
  width: 100px;
  height: 100px;
  background: blue;
}

.v-bind-class-test {
  width: 300px;
  height: 100px;
  border: blue solid 1px;
  display: inline-block;
}

.v-bind-class-test.dark {
  background: black;
  color: white;
}

.mouse-over-box {
  background: green;
  color: white;
  display: inline-block;
  width: 300px;
  height: 100px;
}

.mouse-over-box.mouse-over {
  background: blue;
}
</style>
