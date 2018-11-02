
const testList = () => import('../views/test/list.vue');
const testUpdate = () => import('../views/test/update.vue');

export default [
  {
    path: 'list',
    name: 'testlist',
    component: testList
  },
  {
    path: 'update',
    name: 'testupdate',
    component: testUpdate
  }
]