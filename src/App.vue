<template>
  <div id="app">
    <mega-fundatec />
  </div>
</template>

<script>
import MegaFundatec from "./components/MegaFundatec.vue";

export default {
  name: "App",
  components: {
    MegaFundatec,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
