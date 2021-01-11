<template>
  <div class="content">
    <div class="inputArea">
      <div class="inputField">
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
export default {
  name: 'TitleMaker',
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  padding: 1rem;
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
  display: flex;
  margin-top: 3rem;
  .outputField, .shuffledField {
    flex: 0 0 50%;
    min-height: 50vh;
  }
  .outputField {
    display: flex;
    padding: 5rem 1rem;
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
      word-break: break-word;
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
