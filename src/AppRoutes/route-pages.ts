export const routePages = [
  {
    title: 'HomePage',
    path: '/',
    component: () => import('../pages/HomePage'),
  },
  {
    title: 'SearchPage',
    path: '/search/:query',
    component: () => import('../pages/SearchPage'),
  },
]
