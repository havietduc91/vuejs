import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto'
library.add(faUserSecret, faSearch, faSortDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Vue use bootstrap
Vue.use(BootstrapVue)

// Vue use directives
// Demo #1
Vue.directive('sticky', function (el, binding, vnode) {
  el.style.position = 'fixed'
})

// Demo #4 - Using argument to define how the directive behaves
// I want application to have a header and a footer. I can use
// one custom directive to define the behaviors of both
Vue.directive('sticky', function (el, binding, vnode) {
  const loc = binding.arg === 'bottom' ? 'bottom' : 'top'
  el.style.position = 'fixed'
  el.style[loc] = 0
  if (loc === 'bottom') {
    el.style.background = 'burlywood'
  } else {
    el.style.background = '#7e7e7e'
  }
})

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
