import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BigNumber from 'bignumber.js'
import VueJWT from 'vuejs-jwt'
import './assets/css/luniverstar.css'
import './assets/vendor/css/bootstrap.css'

Vue.use(VueAxios, axios)
Vue.use(BigNumber)
Vue.use(VueJWT, {
  signKey: 'tmpEncryptKey'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')