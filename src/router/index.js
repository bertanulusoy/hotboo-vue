import Vue from 'vue'
import Router from 'vue-router'
import Onset from '@/components/Onset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Onset',
      component: Onset
    }
  ]
})
