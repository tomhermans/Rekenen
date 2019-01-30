<template>
  <div id="app">
    <router-link
      class="link"
      :to="{ path: '/optellen', query: { name: 'optellen' } }"
      >Optellen</router-link
    >
    <router-link
      class="link"
      :to="{ path: '/tafels', query: { name: 'tafels' } }"
      >Tafels</router-link
    >
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
// import Tafels from "./components/Tafels";
// import Optellen from "./components/Optellen";

export default {
  name: "App",
  components: {
    // Tafels,
    // Optellen
  }
};
</script>

<style>
html {
  background: #fafafa;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
  padding: 15px;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
}
.link {
  display: inline-block;
  padding: 10px;
}

.router-link-active {
  color: green;
}
#app {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
p {
  margin: 0.5em 0;
}
</style>
