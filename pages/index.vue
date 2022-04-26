<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <!-- header -->
        <div class="col-12 col-md-4 header">
          <h1>Website of You</h1>
          <h4>ITP 2022 Fall</h4>
          <p>Joohyun Park / jhp527@nyu.edu</p>
          <p>
            <a
              href="https://github.com/jooohyunpark/itp-wou-fall-2022"
              target="_blank"
              >Github repo</a
            >
          </p>
        </div>

        <!-- content -->
        <div class="col-12 col-md-8 content">
          <!-- description -->
          <div class="row description">
            <div class="col-12">
              <Description />
            </div>
          </div>

          <!-- objective -->
          <div class="row objective">
            <div class="col-12">
              <Objective />
            </div>
          </div>

          <!-- schedule -->
          <div class="row schedule">
            <div class="col-12">
              <h2>Schedule</h2>
              <Week1 />
              <Week2 />
              <Week3 />
            </div>
          </div>

          <!-- tools -->
          <div class="row schedule">
            <div class="col-12">
              <Tools />
            </div>
          </div>

          <!-- additional resources -->
          <div class="row schedule">
            <div class="col-12">
              <Resources />
            </div>
          </div>

          <!-- evaluation -->
          <div class="row schedule">
            <div class="col-12">
              <Evaluation />
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style scoped lang="scss">
@import "@/styles/main";

.page {
  .header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    max-height: 100vh;
    overflow-y: scroll;
    padding-top: 48px;
    padding-bottom: 48px;

    @include media-breakpoint-down(md) {
      padding-bottom: 0;
      position: static;
    }
  }

  .content {
    padding-top: 48px;
    padding-bottom: 48px;

    @include media-breakpoint-down(md) {
      padding-top: 0;
    }
  }
}
</style>
<style lang="scss">
li {
  line-height: 1.6em;
}
</style>
