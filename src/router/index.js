import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/home/HomePage.vue';
import ShopPage from '../pages/shop/ShopPage.vue';
import ContactPage from '../pages/contact/ContactPage.vue';
import BlogPage from '../pages/blog/BlogPage.vue';
import CardInfoPage from '../pages/cardInfo/CardInfoPage.vue';
import CartPage from '../pages/cart/CartPage.vue';
import ProfilePage from '../pages/profile/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage,
    },
    {
      path: '/card-info',
      name: 'cardInfo',
      component: CardInfoPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/blog', name: 'blog', component: BlogPage },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
