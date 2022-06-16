<template>
  <footer>
    <div class="form-check form-switch">
      <label class="" for="flexSwitchCheckDefault">
        <!-- https://icons.getbootstrap.com/ -->
        <i :class="`bi ${darkMode ? 'bi-moon-fill' : 'bi-sun'}`"></i>
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 100px;

  .form-check-input {
    cursor: pointer;
  }

  label {
    pointer-events: none;
  }

  i {
    width: 1em;
  }
}
</style>
