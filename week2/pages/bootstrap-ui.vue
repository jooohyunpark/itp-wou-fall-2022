<template>
  <div>
    <h2>Bootstrap UI</h2>

    <!--  -->
    <h3>Buttons</h3>
    <button type="button" class="btn btn-primary" @click="onClick">
      Primary
    </button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>

    <!--  -->
    <h3>Dropdown</h3>
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

    <!--  -->
    <h3>Spinners</h3>
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-dark" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      console.log("clicked!");
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
