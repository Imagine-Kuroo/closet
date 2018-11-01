import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import iView from 'iview';
// import '../node_modules/iview/dist/styles/iview.css';

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)
Vue.use(iView)

const router = createRouter();

// 全局钩子 导航守卫 
router.beforeEach((to, from, next) => {
    console.log('beforeEach');
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