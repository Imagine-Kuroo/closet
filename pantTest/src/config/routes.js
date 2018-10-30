import Todo from '../todo/todo.vue'
import Login from '../views/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo
  }, {
    path: '/login',
    component: Login
  }
]