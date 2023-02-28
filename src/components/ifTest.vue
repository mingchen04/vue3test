<template>
    <div>
        <h1>条件渲染</h1>
        <p>v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。</p>
        <div v-if="bool">真</div>
        <div v-if="!bool">假</div>

        <p>v-show 元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。</p>
        <div v-show="bool">真</div>
        <div v-show="!bool">假</div>

        <br>
        <button @click="qufan">取反</button>
    </div>
</template>
    
<script setup>
import {  ref } from 'vue';

let bool = ref(true);

function qufan() {

    bool.value = !bool.value;
    console.log(bool);
}



</script>
    
<style></style>