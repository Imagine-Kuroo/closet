import testRoutes from './test'
import aestRoutes from './aest'
import bestRoutes from './best'

const Login = () => import('../views/login.vue');
const Panel = () => import('../views/panel.vue');

export const routeArr = [
  {
    path: 'test',
    name: '测试T',
    icon: 'clipboard',
    component: resolve => require(['../layout/base.vue'], resolve),
    children: testRoutes
  },
  {
    path: 'aest',
    name: '测试A',
    icon: 'clipboard',
    component: resolve => require(['../layout/base.vue'], resolve),
    children: aestRoutes
  },
  {
    path: 'best',
    name: '测试B',
    icon: 'clipboard',
    component: resolve => require(['../layout/base.vue'], resolve),
    children: bestRoutes
  }
]

console.log(routeArr, ', ...routeArr--->', ...routeArr);

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/panel',
    component: Panel,
    children: [...routeArr]
  }
]