// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app.scss'

// custom component
import RightHref from '@/components/RightHref'
import NavBar from '@/components/NavBar'
import FootBar from '@/components/FootBar'
import PageNave from '@/components/PageNave'
import Social from '@/components/Social'
import Background from '@/components/Background'
import Buttom from '@/components/Buttom'

// register DOM tag
Vue.component('right-href', RightHref)
Vue.component('nav-bar', NavBar)
Vue.component('page-nave', PageNave)
Vue.component('foot-bar', FootBar)
Vue.component('social', Social)
Vue.component('background', Background)

Vue.component('buttom', Buttom)

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
// require('../node_modules/font-awesome/css/font-awesome.min.css')

// require('./assets/css/layout.css')
// require('./assets/css/app.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
