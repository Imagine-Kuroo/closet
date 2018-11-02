
const testList = () => import('../views/test/list.vue');
const testUpdate = () => import('../views/test/update.vue');

export default [
  {
    path: 'list',
    name:'bestlist',
    component: testList
  },
  {
    path: 'update',
    name:'bestupdate',
    component: testUpdate
  }
]