import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import cors from 'cors'
// import axios from 'axios'
import 'buefy/dist/buefy.css'
import './../node_modules/foundation-sites/dist/css/foundation.min.css';
import './../node_modules/foundation-sites/dist/js/foundation.min.js';

// Vue.prototype.$axios = axios

Vue.use(Buefy)
Vue.use(cors)
// Vue.use(axios)
Vue.config.productionTip = false

// new Vue({
//   router,
//   render: function (h) { return h(App) }
// }).$mount('#app')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');








