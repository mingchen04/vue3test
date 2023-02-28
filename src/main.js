import { createApp } from 'vue';
import App from './App.vue';
import Sssetup from './components/Sssetup';
import Reftest from '@/components/Reftest';
import GrammaticalTang from '@/components/GrammaticalTang';
import ComputedTest from '@/components/ComputedTest';
import ClassStyle from '@/components/ClassStyle';
import ifTest from '@/components/ifTest';


const app = createApp(App)
    .component('Sssetup', Sssetup)
    .component("Reftest", Reftest)
    .component("yft", GrammaticalTang) //语法糖
    .component("ComputedTest", ComputedTest) //计算属性
    .component("ClassStyle", ClassStyle) //类与样式绑定
app.component("ifTest", ifTest); //条件渲染
app.mount('#app');
