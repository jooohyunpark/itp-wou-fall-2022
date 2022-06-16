<template>
  <div class="mode">
    <img src="../assets/img/itp-logo.png" alt="itp" />

    <h2>Interactive Telecommunications Program (ITP - graduate)</h2>
    <p>
      ITP’s mission is to explore the imaginative use of communications
      technologies—how they might augment, improve, and bring delight, utility
      and meaning into people's lives. Students earn a terminal Master's degree
      after two years of intensive technical, creative and conceptual work.
    </p>

    <h2>Interactive Media Arts (IMA – undergraduate)</h2>
    <p>
      IMA is an undergraduate program for students who want to explore the
      creative possibilities of technology and interactivity. Students achieve
      technical fluency in a wide variety of emerging forms of media and study
      the cultural and societal effects alongside a world class education in the
      liberal arts.
    </p>

    <h2>IMA Low Residency Program (IMA Low Res – graduate)</h2>
    <p>
      Low Res is a unique one-year graduate school experience in creative and
      meaningful application of technology that offers three site-specific
      sessions across the University’s Global Network interspersed by two
      semesters of online learning.
    </p>

    <h2>ITP Camp (non-degree)</h2>
    <p>
      ITP Camp provides a 4-week creative and cooperative playground for
      exploring the latest possibilities with expressive technologies. This camp
      is for adult makers, artists, designers, technologists, musicians,
      programmers, fabricators and creatives at all stages of their careers and
      practices.
    </p>

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.mode {
  padding: 100px;
  margin: 0 auto;
  max-width: 800px;
  line-height: 1.5em;

  img {
    width: 150px;
  }

  p {
    margin-bottom: 50px;
  }
}
</style>
