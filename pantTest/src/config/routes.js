import testRoutes from './test'

const Login = () => import('../views/login.vue');
const Panel = () => import('../views/panel.vue');

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
    children: testRoutes
  }

]