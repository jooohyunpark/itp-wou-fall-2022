<template>
  <div class="homepage">
    <div class="works">
      <div
        class="work"
        v-for="(work, i) of works"
        :key="i"
        @click="() => onClick(work.title)"
      >
        <!-- https://github.com/jooohyunpark/itp-wou-fall-2022/blob/main/Note.md#dyanmic-image-path-in-vue -->
        <img :src="require(`../assets/img/${work.src}`)" :alt="work.title" />
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
  methods: {
    onClick(work) {
      console.log("clicked: ", work);
    },
  },
};
</script>

<style scoped>
.homepage {
  max-width: 1280px;
  margin: 100px auto;
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
  position: relative;
  cursor: pointer;
}

.work img {
  width: 100%;
  transition: filter 0.2s linear;
}

.work h2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: white;
  opacity: 0;
  transition: opacity 0.2s linear;
}

.work:hover img {
  filter: brightness(0.2);
}
.work:hover h2 {
  opacity: 1;
}
</style>
