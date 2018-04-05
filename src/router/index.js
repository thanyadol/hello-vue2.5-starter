import Vue from 'vue'
import Router from 'vue-router'

// component
import About from '@/components/About'

// import IndexSlide from '@/components/IndexSlide'
import Index from '@/components/Index'
import Who from '@/components/Who'
import What from '@/components/What'
import Where from '@/components/Where'
import How from '@/components/How'
import Why from '@/components/Why'
// import './style.css';

// Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/index',
      name: 'Index',
      components: {
        default: Index,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/whoweare',
      name: 'Who',
      components: {
        default: Who,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/whatweinvest',
      name: 'What',
      components: {
        default: What,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/whereweinvest',
      name: 'Where',
      components: {
        default: Where,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/howweinvest',
      name: 'How',
      components: {
        default: How,
        slide: null
      },
      props: {
        slide: true
      }
    },
    {
      path: '/whyworkwithus',
      name: 'Why',
      components: {
        default: Why,
        slide: null
      },
      props: {
        slide: true
      }
    }
  ]
})
