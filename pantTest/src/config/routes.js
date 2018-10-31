import Todo from '../todo/todo.vue'
import Login from '../views/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'dasdas'
    },
    children: [
      {
        path: 'test',
        component: Login
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/login/exact',
    component: Login
  },
  {
    path: '/login/exact/two',
    component: Login
  },
]