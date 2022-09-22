<template>
  <div class="scss-page">
    <h2>scss</h2>

    <div class="content-1">
      <h3>Content 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
        efficitur ante, ut maximus lectus. Donec sodales scelerisque elit a
        interdum. Maecenas molestie libero sit amet enim sagittis pretium. In
        lorem felis, accumsan in diam ut, pulvinar pretium ante. Vestibulum sit
        amet vestibulum sapien. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Proin accumsan libero felis,
        in suscipit nibh malesuada luctus. Morbi mollis aliquam felis, sed
        interdum massa gravida non. Maecenas facilisis arcu et congue porta.
        Duis faucibus ultricies ullamcorper. Mauris porttitor, nisi et
        condimentum luctus, tortor tellus malesuada nisl, at faucibus sapien
        tellus ut urna. Curabitur vel varius nibh, gravida ultricies odio.
      </p>
    </div>
    <div class="content-2">
      <h3>Content 2</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
        efficitur ante, ut maximus lectus. Donec sodales scelerisque elit a
        interdum. Maecenas molestie libero sit amet enim sagittis pretium. In
        lorem felis, accumsan in diam ut, pulvinar pretium ante. Vestibulum sit
        amet vestibulum sapien. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Proin accumsan libero felis,
        in suscipit nibh malesuada luctus. Morbi mollis aliquam felis, sed
        interdum massa gravida non. Maecenas facilisis arcu et congue porta.
        Duis faucibus ultricies ullamcorper. Mauris porttitor, nisi et
        condimentum luctus, tortor tellus malesuada nisl, at faucibus sapien
        tellus ut urna. Curabitur vel varius nibh, gravida ultricies odio.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../styles/variables";

.scss-page {
  max-width: $spacing * 8;
  margin: 0 auto;
  color: $black;

  .content-1 {
    max-width: $spacing * 4;

    h3 {
      color: red;
    }

    p {
      color: $blue;
    }
  }
}
</style>
