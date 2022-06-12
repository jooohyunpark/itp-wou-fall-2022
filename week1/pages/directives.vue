<template>
  <div class="directives">
    <!-- v-if -->
    <h2>v-if</h2>
    <div class="box" v-if="show_box"></div>
    <p>
      {{ "this.show_box: " + this.show_box }}
    </p>
    <button @click="toggleShowBox">toggle show_box</button>

    <!-- v-for -->
    <h2>v-for</h2>
    <p>Iterate through array.</p>
    <div v-for="(item, i) in fruits" :key="i">{{ item }}, {{ i }}</div>

    <p>You can iterate through objects too!</p>
    <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>

    <!-- v-bind -->
    <h2>v-bind</h2>
    <p>Binding class dynamically.</p>
    <div
      class="v-bind-class-test"
      :class="classDarkState ? 'dark' : 'light'"
      :id="randomId"
    >
      class -> {{ classDarkState ? "dark" : "light" }}<br />
      id -> {{ randomId }}
    </div>
    <button @click="toggleMode">Toggle mode</button>
    <button @click="randomizeId">Randomize id</button>

    <p>Pulling image locally.</p>
    <img src="../assets/img/itp.jpg" alt="Old itp floor" :width="300" />

    <p>
      Binding image src from
      <a href="https://picsum.photos/">Lorem Picsum</a> <br />
    </p>
    <img :src="src" alt="Some random Lorem Picsum image" />
    <button @click="getRandomPicsumImage">Get random Picsum Image</button>
    <p>{{ src }}</p>

    <!-- v-on -->
    <h2>v-on</h2>
    <p>Listening to mouse event</p>
    <div
      :class="`mouse-over-box ${isMouseOver && 'mouse-over'}`"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      @click="onClick"
    >
      Hover me!<br />
      {{ isMouseOver ? "Mouse is over" : "" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectivesPage",
  data() {
    return {
      show_box: false,
      fruits: ["Banana", "Orange", "Apple", "Mango"],
      myObject: {
        firstName: "Joohyun",
        lastName: "Park",
        class: "Website of You",
      },
      src: "https://picsum.photos/300/200",
      classDarkState: true,
      randomId: Math.random(),
      isMouseOver: false,
    };
  },
  methods: {
    toggleShowBox() {
      this.show_box = !this.show_box;
    },
    toggleMode() {
      this.classDarkState = !this.classDarkState;
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
    onMouseOver() {
      this.isMouseOver = true;
    },
    onMouseOut() {
      this.isMouseOver = false;
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
