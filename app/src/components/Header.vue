<template>
  <div class="header">
    <h1 class="logo">
      <img src='../assets/img/site-logo.svg' alt="ジ〇リタイトルメーカー"/>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    getYear(){
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped lang='scss'>
@use '../assets/scss/variables.scss';
.header {
  position: absolute;
  top: 1rem;
  right: variables.$pd-right;
  img {
    width: calc(70px + 2vw);
    max-width: 110px;
    height: auto;
  }
}
</style>
