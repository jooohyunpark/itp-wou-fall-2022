<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div
          class="work col-xs-12 col-md-6 col-xxl-4"
          v-for="(work, i) of works"
          :key="i"
        >
          <NuxtLink to="/project">
            <img
              :src="require(`../assets/img/${work.src}`)"
              :alt="work.title"
            />
            <h3>{{ work.title }}</h3>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        { title: "Project 1", src: "img-1.jpg" },
        { title: "Project 2", src: "img-2.jpg" },
        { title: "Project 3", src: "img-3.jpg" },
        { title: "Project 4", src: "img-4.jpg" },
        { title: "Project 5", src: "img-5.jpg" },
        { title: "Project 6", src: "img-6.jpg" },
        { title: "Project 7", src: "img-7.jpg" },
        { title: "Project 8", src: "img-8.jpg" },
        { title: "Project 9", src: "img-9.jpg" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  .work {
    position: relative;
    cursor: pointer;
    margin: 20px 0;

    img {
      width: 100%;
      transition: filter 0.2s linear;
    }

    h3 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      color: white;
      opacity: 0;
      transition: opacity 0.2s linear;
      font-size: 20px;
    }

    &:hover {
      img {
        filter: brightness(0.2);
      }

      h3 {
        opacity: 1;
      }
    }
  }
}
</style>
