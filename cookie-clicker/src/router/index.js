import { createRouter, createWebHistory } from 'vue-router'
import CookieGridView from '../views/CookieGridView.vue'
import DidYouKnowView from '../views/DidYouKnowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cookie-grid',
      component: CookieGridView,
    },
    {
      path: '/did-you-know',
      name: 'did-you-know',
      component: DidYouKnowView,
    },
    {
      path: '/:NotFound(.*)',
      name: 'NotFound',
      //lazy loading
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
