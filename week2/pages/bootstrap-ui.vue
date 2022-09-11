<template>
  <div class="bootstrap-ui-page">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2>Bootstrap UI</h2>
        </div>

        <div class="col-xs-12 content">
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

          <p>Same as above but using component</p>

          <Button text="Primary" @click.native="onClick" />
          <Button text="Secondary" class="btn-secondary" />
          <Button text="Success" class="btn-success" />
          <Button text="Danger" class="btn-danger" />
          <Button text="Warning" class="btn-warning" />
          <Button text="Info" class="btn-info" />
          <Button text="Light" class="btn-light" />
          <Button text="Dark" class="btn-dark" />
          <Button text="Link" class="btn-link" />
        </div>

        <div class="col-xs-12 content">
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
        </div>

        <div class="col-xs-12 content">
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

        <div class="col-xs-12 content">
          <h3>Carousel</h3>

          <div id="carousel" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/img/img-1.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="../assets/img/img-2.jpg" class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src="../assets/img/img-3.jpg" class="d-block w-100" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
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

<style scoped lang="scss">
.bootstrap-ui-page {
  .content {
    margin-bottom: 100px;
  }

  #carousel {
    max-width: 800px;
  }
}
</style>
