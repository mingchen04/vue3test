<template>
    <!-- $attrs.class指定根元素接受这个class -->
    <div :class="$attrs.class">
        <h1>类与样式绑定</h1>
        <p>数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式。因为 class 和 style 都是 attribute，我们可以和其他 attribute 一样使用 v-bind
            将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 class 和 style 的 v-bind
            用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。</p>
        <p class="backred" :class="{ 'red': boo1 }">样式绑定</p>
        <p :class="classObj">
            样式绑定2
        </p>
        <p :class="['red', 'backred']">样式绑定3</p>
    </div>
    <div :style="{ fontSize: 30 + 'px' }">
        样式对象1
    </div>
    <div :style="styleObject">样式对象2</div>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">样式数组</div>

</template>
    
<script setup>
const { ref, reactive } = require("@vue/reactivity");
const boo1 = ref(false);
const classObj = reactive({
    red: true,
    fontD: true
})

const styleObject = reactive({
    color: 'red',
    fontSize: '13px'

})

</script>
    
<style>
.fontD {
    font-size: 30px;
}

.backred {
    background: red;
}

.red {
    color: red;
}

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