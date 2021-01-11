<template>
  <div class="container">
    <div class="inputField">
      <h1>ジブリタイトルめ～か～</h1>
      <form name="form1">
        <div class="inputGroup">
          <input required type="text" class="titleInput" placeholder="タイトルその1" id="title1" name="title1">
          <input required type="text" class="titleInput" placeholder="タイトルその2" id="title2">
        </div>
        <div class="buttonGroup">
          <button type="button" id="submit" @click='submit'>登録する</button>
          <button type="button" id="reset" @click='reset'>クリア</button>
        </div>
      </form>
    </div>
    <div class="shuffleButtonField">
      <button type="button" id="shuffle" @click='shuffle'>シャッフル！</button>
    </div>
    <div class="resultArea">
      <div class="outputField">
        <div id="outputList1" class="outputList"></div>
        <div id="outputList2" class="outputList"></div>
      </div>
      <div class="shuffledField">
        <p id="shuffledItem1" class="shuffledItem"></p>
        <p id="shuffledItem2" class="shuffledItem"></p>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      titleList: [[],[]],
      length: 2,
    }
  },
  methods: {
    submit(){
      const input = document.querySelectorAll('.titleInput');
      const output = document.querySelectorAll('.outputList');
      if(!input[0].value || !input[1].value) {
        alert(`両方入力せーや`);
      } else {
        for( let i = 0; i <= this.length - 1 ; i++ ) {
          const val = input[i].value;
          this.titleList[i].push(val);
          const p = document.createElement('p');
          p.textContent = val;
          output[i].appendChild(p);
          input[i].value = '';
        }
      }
      document.form1.title1.focus();
      console.log(this.titleList)
    },
    reset(){
      const input = document.querySelectorAll('.titleInput');
      const output = document.querySelectorAll('.outputList');
      const shuffledItem = document.querySelectorAll('.shuffledItem');
      for( let i = 0; i <= this.length - 1 ; i++ ) {
        this.titleList[i] = [];
        output[i].innerHTML = '';
        input[i].value = '';
        shuffledItem[i].textContent = ''
      }
      document.form1.title1.focus();
      console.log(this.titleList)
    },
    shuffle(){
      const shuffledItem = document.querySelectorAll('.shuffledItem');
      for( let i = 0; i <= this.length - 1 ; i++ ) {
        shuffledItem[i].textContent = this.titleList[i][Math.floor(Math.random() * this.titleList[i].length)];
      }
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style lang='scss'>
@use './assets/scss/style.scss';
</style>
