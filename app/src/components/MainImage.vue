<template>
  <div class="mainImage">
    <img src="../assets/img/img-main.svg" alt="ジ〇リタイトルメーカー">
  </div>
</template>

<script>

export default {
  name: 'MainImage',
}
</script>

<style scoped lang='scss'>
@use '../assets/scss/variables.scss';
.mainImage {
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 40%;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right 0;
  }
}
</style>
