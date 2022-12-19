<template>
  <img alt="Vue logo" src="./assets/logo.png"><br>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  {{ state.name }}
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({ name: "老李" });

    return { state };
  }

}

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
