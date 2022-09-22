<template>
  <div class="container">
    <div class="row">
      <div class="col-1" v-for="i in 12" :key="`col-1-${i}`">
        <div class="box">col-1</div>
      </div>
      <div class="col-2" v-for="i in 6" :key="`col-2-${i}`">
        <div class="box">col-2</div>
      </div>
      <div class="col-3" v-for="i in 4" :key="`col-3-${i}`">
        <div class="box">col-3</div>
      </div>
      <div class="col-4" v-for="i in 3" :key="`col-4-${i}`">
        <div class="box">col-4</div>
      </div>
      <div class="col-6" v-for="i in 2" :key="`col-6-${i}`">
        <div class="box">col-6</div>
      </div>
      <div class="col-8">
        <div class="box">col-8</div>
      </div>
      <div class="col-4">
        <div class="box">col-4</div>
      </div>
      <div class="col-12">
        <div class="box">col-12</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.box {
  height: 100px;
  background: #181818;
  color: white;
  margin: 20px 0;
  padding: 10px;
}
</style>
