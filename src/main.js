// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import VueResource from 'vue-resource'
import VueGoodTable from 'vue-good-table'
import { Nav } from 'bootstrap-vue/es/components'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VModal)
Vue.use(VueGoodTable)
Vue.use(Nav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
