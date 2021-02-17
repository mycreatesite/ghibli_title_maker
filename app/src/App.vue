<template>
  <main class="l-main">
    <MainImage/>
    <div class="container">
      <Header/>
      <TitleMaker/>
      <Footer/>
    </div>
  </main>
</template>

<script>
import TitleMaker from './components/TitleMaker.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MainImage from './components/MainImage.vue'

export default {
  name: 'App',
  components: {
    TitleMaker,
    MainImage,
    Header,
    Footer
  }
}
</script>

<style lang='scss'>
@use './assets/scss/variables.scss';
@use './assets/scss/style.scss';
</style>
