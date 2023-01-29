<template>
    <div>
        <h1>计算属性</h1>
        <p>使用计算属性来描述依赖响应式状态的复杂逻辑</p>
        <p>{{ publishedBooksMessage }}</p>
        <p>{{ fullname }}</p>
        <button @click="updateName">更改名称</button>

    </div>
</template>
    
<script setup>
import { reactive, computed } from 'vue';
const user = reactive([1, 2, 3]);
const name1 = $ref("老李");
const name2 = $ref("老王");

const publishedBooksMessage = computed(() => {
    return user.length > 0 ? 'yes' : "no";
})

const  fullname = computed({
    get() {
        return name1 + ' ' + name2
    },
    set(newValue) {
        [name1, name2] = newValue.split(' ');
    }
})

function updateName(){
    fullname.value = '老张 老黄'
}

</script>
    
<style>
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