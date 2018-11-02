
const testList = () => import('../views/test/list.vue');
const testUpdate = () => import('../views/test/update.vue');

export default [
  {
    path: '/best/list',
    name:'bestlist',
    component: testList
  },
  {
    path: '/best/update',
    name:'bestupdate',
    component: testUpdate
  }
]