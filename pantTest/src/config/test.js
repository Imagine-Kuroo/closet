
const testList = () => import('../views/test/list.vue');
const testUpdate = () => import('../views/test/update.vue');

export default [
  {
    path: '/test/list',
    component: testList
  },
  {
    path: '/test/update',
    component: testUpdate
  }
]