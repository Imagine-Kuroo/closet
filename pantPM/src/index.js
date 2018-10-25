import Vue from 'vue'
import iView from 'iview';
import App from './app.vue'

import './assets/styles/base.styl'

Vue.use(iView);

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root) 