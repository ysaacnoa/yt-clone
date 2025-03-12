import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalizedGeneric,
  type RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'
import Home from '@/modules/layout/components/home-layout/home-layout.vue'
import SignIn from '@/modules/auth/components/sign-in/sign-in.vue'
import SignUp from '@/modules/auth/components/sign-up/sign-up.vue'
import { useAuth } from '@clerk/vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/signin', name: 'sign-in', component: SignIn },
  { path: '/signup', name: 'sign-up', component: SignUp },
  // Agrega más rutas aquí si es necesario
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Función para verificar el estado de autenticación
function checkAuth(
  to: RouteLocationNormalizedGeneric,
  _: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext,
) {
  const { isSignedIn } = useAuth()

  if (to.meta.requiresAuth && !isSignedIn.value) {
    next({ path: '/signin' })
  } else {
    next()
  }
}

// Guardia de navegación global
router.beforeEach((to, from, next) => {
  checkAuth(to, from, next)
})

console.debug('routes', routes)

export default router
