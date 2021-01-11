<template>
  <div class="container">
    <h1>ジブリタイトルめ～か～</h1>
    <TitleMaker/>
    <Footer/>
  </div>
</template>

<script>
import TitleMaker from './components/TitleMaker.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data(){
    return {
      newTitle1: '',
      newTitle2: '',
      titleList: [],
      shuffledTitleList: {}
    }
  },
  components: {
    TitleMaker,
    Footer
  },
  methods: {
    submit(){
      if(!this.newTitle1 || !this.newTitle2) {
        alert(`ちゃんと両方入力せーや`);
      } else {
        const titleSet = {
          val1: this.newTitle1,
          val2: this.newTitle2
        }
        this.titleList.push(titleSet);
        this.newTitle1 = this.newTitle2 = '';
      }
    },
    reset(){
      this.titleList = [];
      this.shuffledTitleList = []
    },
    shuffle(){
      const titleList = [this.titleList.map((obj) => obj.val1), this.titleList.map((obj) => obj.val2)];
      this.shuffledTitleList.val1 = titleList[0][Math.floor(Math.random() * titleList[0].length)]
      this.shuffledTitleList.val2 = titleList[1][Math.floor(Math.random() * titleList[1].length)]
    },
    focus(){
      document.form1.title1.focus();
    }
  },
  computed: {
    shuffledTitle(){
      return this.shuffledTitleList;
    }
  }
}
</script>

<style lang='scss'>
@use './assets/scss/style.scss';
</style>
