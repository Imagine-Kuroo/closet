import Vue from "vue";

const Main = {}
const Login = {}

const routes = [{
  path: '/main', component: Main
}, {
  path: '/login', component: Login
}]

const router = new VueRouter({
  routes
})

const app = new Vue({ router }).$mount('#app')