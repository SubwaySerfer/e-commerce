import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '../pages/home/HomePage.vue'
import ShopPage from '../pages/shop/ShopPage.vue'
import ContactPage from '../pages/contact/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    redirect: '/home'
  },
{ path: '/home',
  name: 'home',
  component: HomePage },
{ path:'/shop',
  name:'shop',
  component: ShopPage },
{ path:'/contact',
  name: 'contact',
  component: ContactPage  
}]
})

export default router;