<template>
  <div class="homepage">
    <div class="works">
      <div class="work" v-for="(work, i) of works" :key="i">
        <img :src="require(`/assets/img/${work.src}`)" :alt="work.title" />
        <h2>{{ work.title }}</h2>
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

<style scoped>
.homepage {
  max-width: 1280px;
  margin: 0 auto;
}

.works {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.work {
  width: 33.33%;
  padding: 20px;
  box-sizing: border-box;
}

.work img {
  width: 100%;
}
</style>
