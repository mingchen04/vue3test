<template>
    <div>
        <h1>列表循环</h1>
        <div>
            循环数组
            <ul>
                <li v-for="(item, index) of arr" :key="index">
                    {{ item.message }} | {{ index }}
                </li>
            </ul>
            循环对象
            <ul>
                <!-- 在v-for中使用v-if -->
                <template v-for="(item, index) in obj" :key="index">
                    <li v-if="index == 'name'">
                        {{ item }} | {{ index }}
                    </li>
                </template>
            </ul>

            <span v-for="n in 10">
                <template v-if="n % 2 == 0">
                    {{ n }}
                </template>
            </span>
        </div>
    </div>
</template>
    
<script setup>
import { ref, reactive } from 'vue';
var arr = ref([{ message: "for" }, { message: "bar" }]);
var obj = reactive({ title: "标题", name: "名字" });



</script>
    
<style></style>