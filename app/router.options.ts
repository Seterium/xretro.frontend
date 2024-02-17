import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  scrollBehaviorType: 'smooth',
  routes: () => [
    {
      name: 'PageIndex',
      path: '/',
      component: () => import('@/segments/common/pages/index.vue'),
    },
  ],
}
