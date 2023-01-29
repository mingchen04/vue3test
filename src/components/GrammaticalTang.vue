<template>
    <div>
        <h1>响应性语法糖</h1>
        <p>相对于普通的 JavaScript 变量，我们不得不用相对繁琐的 .value 来获取 ref 的值。这是一个受限于 JavaScript 语言限制的缺点。然而，通过编译时转换，我们可以让编译器帮我们省去使用
            .value 的麻烦。Vue 提供了一种编译时转换，使得我们可以像这样书写之前的“计数器”示例：</p>
        <button @click="stateAdd">点击增加+{{ state }}</button>
    </div>
</template>

<script setup>
let state = $ref(0);
function stateAdd() {
    state++;
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

p {
    width: 500px;
}
</style>