import Vue from 'vue'
import Router from 'vue-router'
import Countdown from './views/Countdown.vue'
import Stopwatch from './views/Stopwatch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'countdown',
      component: Countdown
    },
    {
      path: '/stopwatch',
      name: 'stopwatch',
      component: Stopwatch
    }
  ]
})
