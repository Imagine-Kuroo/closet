import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter();

// 全局钩子 导航守卫 
router.beforeEach((to, from, next) => {
    next()
    // if (to.fullPath === '/app') {
    //     next({ path: '/login', replace })
    // } else {
    //     next()
    // }
});


new Vue({
    router,
    render: (h) => h(App)
}).$mount('#root')