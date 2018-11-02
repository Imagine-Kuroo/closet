
const testList = () => import('../views/test/list.vue');
const testUpdate = () => import('../views/test/update.vue');

export default [
  {
    path: 'test/list',
    name: 'testlist',
    component: testList
  },
  {
    path: 'test/update',
    name: 'testupdate',
    component: testUpdate
  }
]