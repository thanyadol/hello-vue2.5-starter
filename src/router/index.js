import Vue from 'vue'
import Router from 'vue-router'

// component
import Hello from '@/components/Hello'
import HelloSlide from '@/components/HelloSlide'

import About from '@/components/About'
import Nave from '@/components/Nave'

import Index from '@/components/Index'
import IndexSlide from '@/components/IndexSlide'

import Who from '@/components/Who'
import What from '@/components/What'

// import './style.css';

// Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      components: {
        default: Hello,
        slide: HelloSlide
      },
      props: {
        slide: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/nave',
      name: 'Nave',
      component: Nave
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
    }
  ]
})
