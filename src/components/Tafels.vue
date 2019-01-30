<template>
  <div class="tafels">
    <h2>Tafels</h2>
    <p>
      Een willekeurige tafel wordt gekozen of je kiest er zelf een bovenaan.
    </p>
    <div class="inputs">
      <!--
        <label for="name">Naam:</label>
        <input id="name" type="text" v-model="name" />
      -->
      <label for="nr">Gekozen Tafel</label>
      <input id="nr" type="text" v-model.lazy="number" />
    </div>
    <div class="buttons">
      <!-- <button>Controleer</button> -->
      <button @click="startagain">Opnieuw</button>
    </div>
    <!-- <p class="formname"><span v-if="name">Kom op,</span> {{ name }}</p> -->
    <table class="results">
      <tr v-for="(n, index) in 10">
        <td>{{ n }}<span> ✕ </span>{{ number }} =</td>
        <td>
          <input v-model.lazy="form.values[n]" class="answer" type="number" />
        </td>
        <td class="checkresult">
          <span v-if="form.values[n] == calcthis(n, number)">&#128077; OK</span>

          <!-- <button v-bind:value="n * number">check</button> -->
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "tafels",
  props: ["name"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: "",
      number: this.randomNumber(),
      form: {
        values: []
      }
    };
  },
  methods: {
    randomNumber: function() {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    },
    startagain: function() {
      this.number = this.randomNumber();
      for (var i = 1; i < this.form.values.length; i++) {
        this.form.values[i] = "";
      }
    },
    calcthis(a, b) {
      return a * b;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.formname {
  border: 1px dashed red;
  width: 50vw;
  margin: 1em auto;
}
.inputs {
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0 0 5px;
}
.buttons {
  padding: 0.5em;
  margin: 0;
}
label {
  display: block;
}
input,
button {
  font-size: 14px;
  padding: 4px 10px;
}
input {
  border-bottom: 1px dashed #aaa;
}
table {
  display: table;
  width: 100%;
  margin: 1em auto;
  border: 1px solid #ccc;
}
tr {
  display: table;
  vertical-align: inherit;
  width: 100%;
}
tr:last-child td {
  border: 0;
}
td {
  border-bottom: 1px solid #ddd;
  font-size: 24px;
  padding: 2px 5px;
}
td:first-child {
  width: 100px;
  text-align: right;
}
td:last-child {
  color: green;
  width: 80px;
}
td span {
  font-weight: bold;
  font-size: 16px;
}
button {
  background: #30a04c;
  border: 0;
  border-radius: 5px;
  color: white;
  display: inline-block;
  font-weight: bold;
  margin: 0.5em 0.5em 0 0;
  cursor: pointer;
  outline: none;
}
button:hover {
  background: #06962a;
}
.answer {
  font-size: 24px;
  width: 100px;
  border: 1px dashed #aaa;
}
.checkresult {
  font-size: 12px;
}
.checkresult span {
  color: white;
  background: green;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  border: 0;
}
.checkresult span.fout {
  color: white;
  background: red;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  border: 0;
}
</style>
