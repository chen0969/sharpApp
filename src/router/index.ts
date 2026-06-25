import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // #region Home 群組 ===
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: { group: 'Home' } // 💡 貼上群組標籤
    },
    // #endregion

    // #region Open 群組 ===
    {
      path: '/open-check',
      name: 'open-check',
      component: () => import('../views/OpenCheck.vue'),
      meta: { group: 'Open' } // 💡 貼上群組標籤
    },
    {
      path: '/open-check-bar',
      name: 'open-check-bar',
      component: () => import('../components/opening/Bar.vue'),
      meta: { group: 'Open' } // 💡 貼上群組標籤
    },

    // #endregion

    // #region Close 群組 ===
    {
      path: '/close-check',
      name: 'close-check',
      component: () => import('../views/CloseCheck.vue'),
      meta: { group: 'Close' }
    },
    {
      path: '/close-revenue',
      name: 'close-revenue',
      component: () => import('../views/Revenue.vue'),
      meta: { group: 'Close' }
    },
    {
      path: '/close-swiper',
      name: 'close-swiper',
      component: () => import('../views/CardSwiper.vue'), // 可以共用同一個 Vue 元件
      meta: { group: 'Close' }
    },

    // #endregion

    // #region Invencheck 群組 ===
    {
      path: '/inven-swiper',
      name: 'inven-swiper',
      component: () => import('../views/SwiperHome.vue'),
      meta: { group: 'Inven' }
    },
    {
      path: '/swiper/:section',
      name: ':section',
      component: () => import('../views/CardSwiper.vue'),
      meta: { group: 'Inven' }
    },
    {
      path: '/inven-all',
      name: 'inven-all',
      component: () => import('../views/AllCards.vue'),
      meta: { group: 'Inven' }
    },
    {
      path: '/inven-sum',
      name: 'inven-sum',
      component: () => import('../views/Summary.vue'),
      meta: { group: 'Inven' }
    },

    // #endregion

    // #region Operation 群組 ===
    {
      path: '/operation-timer',
      name: 'operation-timer',
      component: () => import('../views/CookTimer.vue'),
      meta: { group: 'Operation' }
    },
    {
      path: '/operation-gallery',
      name: 'operation-gallery',
      component: () => import('../views/Gallery.vue'),
      meta: { group: 'Operation' }
    }

    // #endregion
  ]
})

export default router