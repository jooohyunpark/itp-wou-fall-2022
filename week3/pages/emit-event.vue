<template>
  <div>
    <h2>Emitting and Listening to Events</h2>

    <Button @onClick="onClick" />
    <Button2 @increaseBy="increaseCount" />

    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onClick() {
      console.log("!!");
    },
    increaseCount(n) {
      this.count += n;
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
