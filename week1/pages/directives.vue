<template>
  <div class="directives">
    <!-- v-if -->
    <div class="box" v-if="show_box"></div>
    <p>
      {{ "this.show_box: " + this.show_box }}
    </p>
    <button @click="onClick">toggle show_box</button>

    <!--  -->
  </div>
</template>

<script>
export default {
  name: "LifeCyclePage",
  data() {
    return {
      show_box: false,
    };
  },
  methods: {
    onClick() {
      this.show_box = !this.show_box;
    },
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
