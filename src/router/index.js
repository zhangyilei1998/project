import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Choosemap from '@/components/choosemap'
import Home from '@/components/home'
import Experienceshow from '@/components/experienceshow'
import Trackforecast from '@/components/trackforecast'
import Trackshow from '@/components/trackshow'
import Interestshow from '@/components/Interestshow'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/index',
      component: Index
    }, {
      path: '/choosemap',
      component: Choosemap
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/experienceshow',
      component: Experienceshow
    }, {
      path: '/interestshow',
      component: Interestshow
    }, {
      path: '/trackforecast',
      component: Trackforecast
    }, {
      path: '/trackshow',
      component: Trackshow
    }
  ],
  mode: 'history'
})
