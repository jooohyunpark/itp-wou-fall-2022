<template>
  <footer>
    <div class="form-check form-switch">
      <label class="" for="flexSwitchCheckDefault">
        <i :class="`bi ${darkMode ? 'bi-moon-fill' : 'bi-moon'}`"></i>
      </label>
      <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        v-model="darkMode"
        @change="toggleDarkMode"
      />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },

  methods: {
    toggleDarkMode() {
      this.$nuxt.$emit("toggle-mode", this.darkMode);
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  max-width: 800px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  i {
    width: 1em;
  }
}
</style>
