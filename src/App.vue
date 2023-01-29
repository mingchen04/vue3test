<template>
  <img alt="Vue logo" src="./assets/logo.png"><br>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- <button @click="nameup">{{ state.name }}</button> -->
  <!-- <Sssetup></Sssetup> -->
  <!-- <Reftest></Reftest> -->

  <!-- 语法糖$ref -->
  <!-- <yft></yft> -->

  <!-- 计算属性 -->
  <!-- <ComputedTest></ComputedTest> -->

  <!-- 类与样式绑定 -->
  <class-style class="ye"></class-style>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({ name: "老李" });

    function nameup() {
      if (state.name == "老李") {
        state.name = "老王";
      } else {
        state.name = "老李";
      }
      return state.name;
    }

    return { state, nameup };
  }
}

</script>

<style>
.ye{
  background: yellow;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
