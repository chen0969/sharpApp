import { createRouter, createWebHistory }
  from 'vue-router'

import AllCards from '../views/AllCards.vue'

import CardSwiper from '../views/CardSwiper.vue'

import Summary from '../views/Summary.vue'
import Timer from '../views/Timer.vue'

const router = createRouter({

  history: createWebHistory(),

  routes: [

    {
      path: '/',
      redirect: '/sharpApp',  
    },

    {
      path: '/swiper',
      name: 'swiper',
      component: CardSwiper,
    },

    {
      path: '/all',
      name: 'all',
      component: AllCards,
    },

    {
      path: '/summary',
      name: 'summary',
      component: Summary,
    },

        {
      path: '/timer',
      name: 'timer',
      component: Timer,
    }

  ],

})

export default router