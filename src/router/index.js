import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InscribirView from '@/views/InscribirView.vue'
import PerfilAdmin from '@/views/PerfilAdmin.vue'
import AdminView from '@/views/AdminView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/inscribir',
    name: 'inscribir',
    component: InscribirView
  },
  {
    path: '/perfil-admin',
    name: 'perfil-admin',
    component: PerfilAdmin
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach( (to, from, next)  => {
//   const requiresAuth = to.matched.some( (record) => record.meta.requiresAuth)
//   const unsubscribe = auth.onAuthStateChanged( (user) => {
//     if(requiresAuth && !user){
//       next({name: 'login'})
//     }else if (requiresAuth && user && !user.emailVerified){
//       next(false)
//     }else{
//       next() // permite la navegacion a la ruta deseada
//     }
//     unsubscribe() // dejar de hacer el seguimiento de las rutas
//   })
// })
export default router
