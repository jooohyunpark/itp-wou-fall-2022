<template>
  <div class="grid-system-page">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Grid system</h2>
        </div>
      </div>

      <div class="row">
        <div
          class="work col-xs-12 col-md-6 col-xl-4"
          v-for="(work, i) of works"
          :key="i"
        >
          <!-- https://github.com/jooohyunpark/itp-wou-fall-2022/blob/main/Note.md#dyanmic-image-path-in-vue -->
          <img :src="require(`../assets/img/${work.src}`)" :alt="work.title" />
          <h3>{{ work.title }}</h3>
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
        { title: "Title 1", src: "img-1.jpg" },
        { title: "Title 2", src: "img-2.jpg" },
        { title: "Title 3", src: "img-3.jpg" },
        { title: "Title 4", src: "img-4.jpg" },
        { title: "Title 5", src: "img-5.jpg" },
        { title: "Title 6", src: "img-6.jpg" },
        { title: "Title 7", src: "img-7.jpg" },
        { title: "Title 8", src: "img-8.jpg" },
        { title: "Title 9", src: "img-9.jpg" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.grid-system-page {
  h2 {
    text-align: center;
  }

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
