<template>
  <div class="appContent">
    <div class="inputArea">
      <div class="inputField">
        <form name="form1">
          <div class="inputGroup">
            <input v-model='newTitle.val1' required type="text" class="titleInput" placeholder="タイトルその1" id="title1" name="title1">
            <input v-model='newTitle.val2' required type="text" class="titleInput" placeholder="タイトルその2" id="title2">
          </div>
          <div class="buttonGroup">
            <button type="button" id="submit" @click='submit(); focus()'>登録する</button>
            <button type="button" id="reset" @click='reset(); focus()'>クリア</button>
          </div>
        </form>
      </div>
      <div class="shuffleButtonField">
        <button type="button" id="shuffle" @click='shuffle'>シャッフルする！</button>
      </div>
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
      <div class="shuffledField">
        <p id="shuffledItem1" class="shuffledItem">{{getShuffledTitle.val1}}</p>
        <p id="shuffledItem2" class="shuffledItem">{{getShuffledTitle.val2}}</p>
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
      shuffledTitle: {}
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
      this.shuffledTitle = []
    },
    shuffle(){
      const titleList = [this.titleList.map((obj) => obj.val1), this.titleList.map((obj) => obj.val2)];
      this.shuffledTitle.val1 = titleList[0][Math.floor(Math.random() * titleList[0].length)]
      this.shuffledTitle.val2 = titleList[1][Math.floor(Math.random() * titleList[1].length)]
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
button,input {
  font-family: 'Noto Sans JP', sans-serif;
}
button {
  padding: 1rem;
}
.appContent {
  margin-bottom: 5rem;
}
.inputGroup {
  input {
    padding: 1.25rem;
    margin: 1rem .5rem;
    min-width: 25%;
  }
}
.buttonGroup {
  button {
    width: 25%;
    margin: 1rem .5rem;
  }
}
.shuffleButtonField {
  button {
    width: calc(50% + 1rem);
  }
}
.resultArea {
  font-family: 'Potta One', cursive;
  display: flex;
  margin-top: 3rem;
  border-radius: 10px;
  overflow: hidden;
  .outputField, .shuffledField {
    padding: 5rem 1rem;
    flex: 0 0 50%;
    min-height: 50vh;
    word-break: break-word;
  }
  .outputField {
    display: flex;
    background-color: #f7f7f7;
    .outputList {
      flex: 0 0 50%;
      text-align: left;
      padding: 0 .75rem;
      &:first-of-type {
        text-align: right;
      }
    }
    p {
      font-size: 1.75rem;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 0;
      padding: 1rem 2rem;
      border-bottom: 4px dashed #eaeaea;
    }
  }
  .shuffledField {
    padding-top: 5rem;
    border: 10px solid #f7f7f7;
    p {
      margin-top: 0;
      margin-bottom: 2rem;
      font-size: 4rem;
    }
  }
}
</style>
