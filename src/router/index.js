import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Erp = () => import('@/views/Projects/Erp.vue')
const AppSystem = () => import('@/views/Projects/AS.vue')
const Zyone = () => import('@/views/Projects/Zyone.vue')
const HCT = () => import('@/views/Projects/HCT.vue')
const CCMF = () => import('@/views/Projects/CCMF.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Projects', component: Home},
    { path: '/erp', name: 'ERPNext', component: Erp},
    { path: '/appointment-system', name: 'Appointment System', component: AppSystem},
    { path: '/ccmf', name: 'CCMF', component: CCMF},
    { path: '/hct', name: 'HCT', component: HCT},
    { path: '/zyone', name: 'Zyone', component: Zyone},
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
