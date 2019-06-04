import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Vue use bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


//Vue use directives
// Demo #1
Vue.directive("sticky", function(el, binding, vnode) {
    el.style.position = "fixed";
});

// Demo #4 - Using argument to define how the directive behaves
// I want application to have a header and a footer. I can use
// one custom directive to define the behaviors of both
Vue.directive("sticky", function(el, binding, vnode) {
    const loc = binding.arg === "bottom" ? "bottom" : "top";
    el.style.position = "fixed";
    el.style[loc] = 0;
    if (loc === "bottom") {
        el.style.background = "burlywood";
    } else {
        el.style.background = "#7e7e7e";
    }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
