import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


import Vue from 'vue';

// 添加状态管理
import Vuex from 'vuex'
import todoModule from './store/todoModule'
Vue.use(Vuex);

// 配置路由
import VueRouter from 'vue-router';
import TodoList from './components/TodoList.vue';
import TimeManagement from './components/TimeManagement.vue';



new Vue({
    // 配置选项
    el: '#app', // 指定Vue实例挂载的根元素，这里对应index.html中的id为"app"的div
    // 其他配置选项
  });
  
// 注册全局组件
import TodoList from './components/TodoList.vue';
Vue.component('todo-list', TodoList);
// 可以在任意的地方使用<todo-list></todo-list>引用注册的全局组件

const store = new Vuex.Store({
    modules: {
        todo: todoModule
        // 其他模块
    }
})

new Vue({
    el:'#app',
    store, // 将vuexstore 实例添加到Vue实例中
})




Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: TodoList },
    { path: '/time-management', component: TimeManagement }
    // 其他路由配置
  ]
});

new Vue({
  el: '#app',
  router, // 将路由实例添加到Vue实例中
});
