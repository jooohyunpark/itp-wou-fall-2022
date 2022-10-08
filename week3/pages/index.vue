<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="work col-12 col-md-6" v-for="(work, i) of works" :key="i">
          <NuxtLink :to="work.to">
            <img :src="require(`../assets/${work.src}`)" :alt="work.title" />
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
        { title: "Project 1", src: "img/home/img-1.jpg", to: "project-1" },
        { title: "Project 2", src: "img/home/img-2.jpg", to: "project-2" },
        { title: "Project 3", src: "img/home/img-3.jpg", to: "project-3" },
        { title: "Project 4", src: "img/home/img-4.jpg", to: "project-4" },
        { title: "Project 5", src: "img/home/img-5.jpg", to: "project-5" },
        { title: "Project 6", src: "img/home/img-6.jpg", to: "project-6" },
        { title: "Project 7", src: "img/home/img-7.jpg", to: "project-7" },
        { title: "Project 8", src: "img/home/img-8.jpg", to: "project-8" },
        { title: "Project 9", src: "img/home/img-9.jpg", to: "project-9" },
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
