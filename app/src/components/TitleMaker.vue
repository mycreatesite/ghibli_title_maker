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
        <p id="shuffledItem" class="shuffledItem">{{getShuffledTitle}}</p>
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
      shuffledTitle: ''
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
    },
    shuffle(){
      const titleList = [this.titleList.map((obj) => obj.val1), this.titleList.map((obj) => obj.val2)];
      this.shuffledTitle = randomFactory(titleList[0],0) + '　' + randomFactory(titleList[1],1);
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
@use '../assets/scss/variables.scss';
button,input {
  font-family: 'Noto Sans JP', sans-serif;
  padding: 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
}
.appContent {
  &::before {
    content: '';
    width: 1px;
    height: 5rem;
    display: block;
    margin: 0 auto 1.5rem;
    background-color: variables.$secondary;
  }
}
.outline {
  font-weight: 700;
  font-size: 1.25rem;
}
.inputGroup {
  input {
    width: 100%;
    border-radius: 0.25rem;
    border: 2px solid #dbdbdb;
  }
}
.buttonGroup {
  margin-top: 1rem;
  button {
    width: 100%;
  }
  #submit {
    background-color: variables.$primary;
    color: #fff;
  }
}
.shuffleButtonField {
  #shuffle {
    width: 50%;
    background-color: variables.$secondary;
    color: #fff;
    margin: 1.5rem 0;
  }
}
.resultArea {
  margin-top: 3rem;
  .outputField, .shuffledField {
    flex: 0 0 50%;
    min-height: 25vh;
    word-break: break-word;
  }
  .outputField,.shuffledField {
    display: flex;
    background-color: #fff;
    box-shadow: 10px 10px 20px rgba(#000,.04);
  }
  .outputField {
    padding: 2.5rem 0;
    .outputList {
      flex: 0 0 50%;
      text-align: left;
      padding: 0 .75rem;
      &:first-of-type {
        text-align: right;
      }
    }
    p {
      color: variables.$primary;
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  .shuffledField {
    padding: 5rem .75rem;
    p {
      margin-top: 0;
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }
  }
}
</style>
