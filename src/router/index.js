import {createRouter, createWebHistory} from 'vue-router'

// import HomePage from '../pages/home/HomePage'
import HomePage from '../pages/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    redirect: '/home'
  },
{path: '/home',
name: 'home',
component: HomePage}]
})

export default router;