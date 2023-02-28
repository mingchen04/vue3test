<template>
    <div>
        <h1>条件渲染</h1>
        <p>v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。</p>
        <div v-if="true">真</div>
        <div v-if="false">假</div>

    </div>
</template>
    
<script setup lang='ts'>

</script>
    
<style></style>