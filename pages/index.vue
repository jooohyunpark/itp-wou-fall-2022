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
              <h2>Description</h2>
              <p>
                Portfolio website is a creative window for artists to showcase
                their projects. But beyond its aesthetic purpose, it can also be
                a good resource to learn the backbone of modern javascript
                frameworks.
              </p>
              <p>
                In this 4-week class, we will explore how to build a portfolio
                website from the ground up using Vue.js. The class aims to
                create a static web application consisting of basic pages (Home,
                About, Project) and elements (Header, Footer, Content,
                Navigation, CTA). Students will design responsive UI, create
                modular components, and implement advanced styles and javascript
                libraries to showcase their artworks with unrestrained
                creativity on a browser.
              </p>
              <p>
                This class is programming-focused and designed for students
                seeking to create a custom portfolio site or to learn about
                modern javascript framework. Basic front-end tech stack
                (html/css, javascript, npm) is required. Students must take ICM
                and at least one other javascript programming class. Experience
                with responsive web design is helpful.
              </p>
            </div>
          </div>

          <!-- objective -->
          <div class="row objective">
            <div class="col-12">
              <h2>Course Objectives</h2>
              <p>At the completion of this course, the students will:</p>
              <ol>
                <li>
                  Be comfortable designing visuals/UX for static web application
                </li>
                <li>
                  Learn modular programming patterns in javascript using Vue.js
                </li>
                <li>
                  Build and deploy a custom portfolio website (or equivalent)
                </li>
              </ol>
            </div>
          </div>

          <!-- schedule -->
          <div class="row schedule">
            <div class="col-12">
              <h2>Schedule</h2>
              <h3>Week 1 – Intro / Vue Basics</h3>
              <ul>
                <li>
                  Intro
                  <ul>
                    <li>Introducing each other</li>
                    <li>
                      Creative portfolio website examples Git, npm, package.json
                    </li>
                    <li>Why Vue? (or React)</li>
                  </ul>
                </li>
                <li>
                  Vue basics
                  <ul>
                    <li>
                      Nuxt code structure Life cycle hooks (created, mounted,
                      destroy)
                    </li>
                    <li>Data, props, computed value Component concept</li>
                    <li>
                      Making button component Nuxt link-to Default.vue for
                      global elements
                    </li>
                  </ul>
                </li>
                <li>
                  Directives
                  <ul>
                    <li>v-if</li>
                    <li>v-for: loop through data</li>
                    <li>v-bind: rendering image</li>
                    <li>
                      v-on: user events (click, mouse, mouseenter, mouseleave)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- tools -->
          <div class="row schedule">
            <div class="col-12">
              <h2>Tools</h2>
              <ul>
                <li>
                  <a href="https://vuejs.org/" target="_blank">Vue.js</a> – The
                  progressive javaScript framework for building UI
                </li>
                <li>
                  <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> –
                  JavaScript library based on Vue.js
                </li>
                <li>
                  <a href="https://sass-lang.com/" target="_blank">Nuxt.js</a> –
                  Powerful CSS extension language for advanced styling
                </li>
                <li>
                  <a href="https://getbootstrap.com/" target="_blank"
                    >Bootstrap</a
                  >
                  – CSS framework for responsive web development
                </li>
              </ul>
            </div>
          </div>

          <!-- additional resources -->
          <div class="row schedule">
            <div class="col-12">
              <h2>Additional Resources</h2>
              <ul>
                <li>
                  <a href="https://vuetifyjs.com/en/" target="_blank"
                    >Vuetify</a
                  >
                  – Vue UI Library built upon Material Design framework
                </li>
                <li>
                  <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a> -
                  State management pattern + library for Vue.js applications
                </li>
                <li>
                  <a href="https://www.netlify.com/" target="_blank">Netlify</a>
                  – Serverless platform that enables git-based automated
                  deployments
                </li>
              </ul>
            </div>
          </div>

          <!-- evaluation -->
          <div class="row schedule">
            <div class="col-12">
              <h2>Evaluation</h2>
              <p>
                You are required to attend all class meetings and submit all
                weekly assignments and a final project.
              </p>
              <p>
                Grading (pass/fail) will be based on a combination of factors:
              </p>
              <ul>
                <li>
                  Attendance, participation in class discussion, and engagement
                  in other students' projects (40%)
                </li>
                <li>Assignments (40%)</li>
                <li>Final Project (20%)</li>
              </ul>
              <p>
                Please see ITP's statement on Pass/Fail which states that a
                "Pass" is equivalent to an "A" or a "B" while anything less
                would be considered a "Fail".
              </p>
              <p>
                Attendance is mandatory. Please inform your teacher via email if
                you are going to miss a class. Two unexcused absences is cause
                for failing the class. (An unexcused lateness of 10 minutes or
                more is equivalent to 1/2 an absence.)
              </p>
              <p>
                This class will be participatory, you are expected to
                participate in discussions and give feedback to other students
                both in class and participate with their projects. This (along
                with attendance) is 40% of your grade.
              </p>
              <p>
                Class will culminate with final projects. You are expected to
                push your abilities to produce something that utilizes what you
                have learned in the class that is useful in some manner to
                yourself or the world. This will comprise 20% of your grade.
              </p>
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

  li {
    line-height: 1.6em;
  }
}
</style>
