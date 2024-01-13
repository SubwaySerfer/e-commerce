import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/home/HomePage.vue';
import ShopPage from '../pages/shop/ShopPage.vue';
import ContactPage from '../pages/contact/ContactPage.vue';
import BlogPage from '../pages/blog/BlogPage.vue';
import CardInfoPage from '../pages/cardInfo/CardInfoPage.vue';
import CartPage from '../pages/cart/CartPage.vue';
import ProfilePage from '../pages/profile/ProfilePage.vue'
// import ComparisonPage from '../pages/comparison/ComparisonPage.vue'
import CheckoutPage from '../pages/checkout/CheckoutPage.vue'
import FavoritePage from '../pages/favorite/FavoritePage.vue'
import NotFound from '../pages/notFound/NotFound.vue'
import BlogPostPage from '../pages/blog/[id]/BlogPostPage.vue'

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
      path: '/card-info/:id',
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
    // {
    //   path: '/comparison',
    //   name: 'comparison',
    //   component: ComparisonPage
    // },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage
    },
    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/blog', name: 'blog', component: BlogPage },
    {
      path: '/blog/:id',
      component: BlogPostPage,
    },
    { path: '/wishlist', name: 'wishlist', component: FavoritePage },
    { path: '/page404', name: 'page404', component: NotFound },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' })
      }, 500)
    });
  }
})
export default router;
