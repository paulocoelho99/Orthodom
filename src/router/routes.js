
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('pages/Index.vue')
  },

  {
    path: '/telao',
    name: 'telao',
    component: () => import('pages/Telao.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
