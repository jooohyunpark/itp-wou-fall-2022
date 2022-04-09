<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <!-- header -->
        <div class="col-12 col-md-4 header">
          <h1>Website of You</h1>
          <p>ITP 2022 Fall</p>
          <p>Joohyun Park</p>
          <p>
            <a href="https://github.com/jooohyunpark/itp-wou-fall-2022"
              >Github repo</a
            >
          </p>
        </div>

        <!-- content -->
        <div class="col-12 col-md-8 content">
          <!-- statements -->
          <div class="row statements">
            <div class="col-12">
              <h2>Statements</h2>
            </div>
            <div class="col-12">
              <h3>Statement of Academic Integrity</h3>
              <p>
                Plagiarism is presenting someone else’s work as though it were
                your own. More specifically, plagiarism is to present as your
                own: A sequence of words quoted without quotation marks from
                another writer or a paraphrased passage from another writer’s
                work or facts, ideas or images composed by someone else.
              </p>
            </div>
            <div class="col-12">
              <h3>Statement of Principle</h3>
              <p>
                The core of the educational experience at the Tisch School of
                the Arts is the creation of original academic and artistic work
                by students for the critical review of faculty members. It is
                therefore of the utmost importance that students at all times
                provide their instructors with an accurate sense of their
                current abilities and knowledge in order to receive appropriate
                constructive criticism and advice. Any attempt to evade that
                essential, transparent transaction between instructor and
                student through plagiarism or cheating is educationally
                self-defeating and a grave violation of Tisch School of the Arts
                community standards. For all the details on plagiarism, please
                refer to page 10 of the Tisch School of the Arts, Policies and
                Procedures Handbook, which can be found online at:
                <a href="http://students.tisch.nyu.edu/page/home.html"
                  >http://students.tisch.nyu.edu/page/home.html</a
                >
              </p>
            </div>
            <div class="col-12">
              <h3>Statement on Accessibility</h3>
              <p>
                Please feel free to make suggestions to your instructor about
                ways in which this class could become more accessible to you.
                Academic accommodations are available for students with
                documented disabilities. Please contact the Moses Center for
                Students with Disabilities at 212 998-4980 for further
                information.
              </p>
            </div>
            <div class="col-12">
              <h3>Statement on Counseling and Wellness</h3>
              <p>
                Your health and safety are a priority at NYU. If you experience
                any health or mental health issues during this course, we
                encourage you to utilize the support services of the 24/7 NYU
                Wellness Exchange 212-443-9999. Also, all students who may
                require an academic accommodation due to a qualified disability,
                physical or mental, please register with the Moses Center
                212-998-4980. Please let your instructor know if you need help
                connecting to these resources.
              </p>
            </div>
            <div class="col-12">
              <h3>Statement on use of Electronic Devices</h3>
              <p>
                Laptops will be an essential part of the course and may be used
                in class during workshops and for taking notes in lecture.
                Laptops must be closed during class discussions and student
                presentations. Phone use in class is strictly prohibited unless
                directly related to a presentation of your own work or if you
                are asked to do so as part of the curriculum.
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
}
</style>
