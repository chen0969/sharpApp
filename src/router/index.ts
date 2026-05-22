import { createRouter, createWebHistory }
from 'vue-router'

import AllCards from '../views/AllCards.vue'

import CardSwiper from '../views/CardSwiper.vue'

const router = createRouter({

  history: createWebHistory(),

  routes: [

    {
      path: '/',
      name: 'swiper',
      component: CardSwiper,
    },

    {
      path: '/all',
      name: 'all',
      component: AllCards,
    },

  ],

})

export default router