
const testList = () => import('../views/test/list.vue');
const testUpdate = () => import('../views/test/update.vue');

export default [
  {
    path: 'aest/list',
    name:'aestlist',
    component: testList
  },
  {
    path: 'aest/update',
    name:'aestupdate',
    component: testUpdate
  }
]