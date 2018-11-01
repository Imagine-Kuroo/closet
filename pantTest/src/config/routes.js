import Todo from '../todo/todo.vue'
import Login from '../views/login.vue'

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/app',
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'dasdas'
    },
    // 路由配置里的钩子
    beforeEnter(to, from, next) {
      console.log('app route before enter');
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
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