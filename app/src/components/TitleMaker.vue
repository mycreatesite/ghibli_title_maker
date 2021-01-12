<template>
  <div class="appContent">
    <div class="inputArea">
      <p class="outline">ジ〇リ映画のタイトルを<br>２語に分けて複数入力しましょう</p>
      <form name="form1">
        <div class="inputGroup row">
          <div class="col">
            <input v-model='newTitle.val1' required type="text" class="titleInput col" placeholder="タイトルその1" id="title1" name="title1">
          </div>
          <div class="col">
            <input v-model='newTitle.val2' required type="text" class="titleInput col" placeholder="タイトルその2" id="title2">
          </div>
        </div>
        <div class="buttonGroup row">
          <div class="col">
            <button type="button" id="submit" @click='submit(); focus()'>登録する</button>
          </div>
          <div class="col">
            <button type="button" id="reset" @click='reset(); focus()'>クリア</button>
          </div>
        </div>
      </form>
    </div>
    <div class="resultArea">
      <div class="outputField">
        <div id="outputList1" class="outputList">
          <p v-for='item in titleList' :key="item">{{item.val1}}</p>
        </div>
        <div id="outputList1" class="outputList">
          <p v-for='item in titleList' :key="item">{{item.val2}}</p>
        </div>
      </div>
      <div class="shuffleButtonField">
        <button type="button" id="shuffle" @click='shuffle'>シャッフルする！</button>
      </div>
      <div class="shuffledField">
        <transition>
          <p v-if='isShuffled' id="shuffledItem" class="shuffledItem">{{getShuffledTitle}}</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TitleMaker',
  data(){
    return {
      newTitle: {},
      titleList: [],
      shuffledTitle: '',
      isShuffled: false
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    submit(){
      if(!this.newTitle.val1 || !this.newTitle.val2) {
        alert(`ちゃんと両方入力せーや`);
      } else {
        const titleSet = {
          val1: this.newTitle.val1,
          val2: this.newTitle.val2
        }
        this.titleList.push(titleSet);
        this.newTitle = {};
      }
    },
    reset(){
      this.titleList = [];
      this.shuffledTitle = ''
      this.isShuffled = false;
    },
    shuffle(){
      const titleList = [this.titleList.map((obj) => obj.val1), this.titleList.map((obj) => obj.val2)];
      this.shuffledTitle = randomFactory(titleList[0],0) + ' ' + randomFactory(titleList[1],1);
      this.isShuffled = true;
      function randomFactory(el,index){
        return el[Math.floor(Math.random() * titleList[index].length)]
      }
    },
    focus(){
      document.form1.title1.focus();
    }
  },
  computed: {
    getShuffledTitle(){
      return this.shuffledTitle;
    }
  }
}
</script>

<style scoped lang='scss'>
@use '../assets/scss/components/titleMaker';
</style>
