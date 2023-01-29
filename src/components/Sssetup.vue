<template>
    <div>
        <button @click="numadd">{{ state.num }}+1</button>
    </div>
</template>
    
<script setup>
import { reactive } from "vue";
const state = reactive({ num: 0 });
function numadd() {
    state.num++
}

</script>
    
<style>

</style>