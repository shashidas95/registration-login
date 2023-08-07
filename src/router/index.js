import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
const Home = () => import('../views/HomeView.vue');
const About = () => import('../views/AboutView.vue');
const Register = () => import('../views/RegisterView.vue')
const Login = () => import('../views/LoginView.vue');
const NotFound = () => import('../views/NotFoundView.vue');
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },

  ]
})

export default router
