<template>
    <div>
        hello ref
        {{ state }}
        {{ state2 }}
    </div>
</template>
    
<script setup>
//reactive ref的区别
import { reactive, ref } from 'vue'
const state = reactive({ id: 0 });
const state2 = ref(0);

//reactive的局限性
let cid = state.id;
cid++;
console.log("state:", state);

let cid2 = state2;
cid2.value++;
console.log("state2:", state2.value);

</script>
    
<style>

</style>