<template>
  <div class="optellen">
    <h2>Optellen</h2>
    <p>
      Vul de oplossing van de som in het vakje. <br />Bij een juist antwoord
      verschijnt een duimpje !
    </p>
    <!--
      <div class="buttons">
        <button @click="startagain">Opnieuw</button>
      </div>
    -->
    <table class="results">
      <tr v-for="(n, index) in 10">
        <td>{{ arraynum.values[index] }} + {{ arraynum2.values[index] }} =</td>
        <td><input v-model="form.values[n]" class="answer" type="number" /></td>
        <td class="checkresult">
          <span
            v-if="
              form.values[n] ==
                calcthis(arraynum.values[index], arraynum2.values[index])
            "
            >&#128077; OK</span
          >
        </td>
      </tr>
    </table>

    <p>
      <a
        href="javascript:location.reload();
"
        >Druk refresh voor nieuwe opgaven</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "optellen",
  props: ["name"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      form: {
        values: []
      },
      arraynum: {
        values: this.randomArray()
      },
      arraynum2: {
        values: this.randomArray()
      }
    };
  },
  methods: {
    randomNumber: function() {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    },
    randomArray: function() {
      var arr = [];
      for (var i = 1; i < 11; i++) {
        arr.push(this.randomNumber());
      }
      return arr;
    },
    startagain: function() {
      for (var i = 1; i < this.form.values.length; i++) {
        this.form.values[i] = "";
      }
    },
    calcthis(a, b) {
      return a + b;
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
