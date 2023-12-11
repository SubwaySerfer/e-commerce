<template>
  <header>
    <div class="logo-box">
      <img src="/assets/icons/mainLogo.png" alt="furniro logo" class="main-logo" @click="this.routeHome" />
      <h1 @click="this.routeHome">Furniro</h1>
    </div>
    <nav>
      <ul>
        <li class="btn-root"><router-link to="/">Home</router-link></li>
        <li class="btn-root"><router-link to="/shop">Shop</router-link></li>
        <li class="btn-root"><router-link to="/blog">Blog</router-link></li>
        <li class="btn-root">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <div class="icons-box">
      <ul class="icons-list">
        <li class="btn-root">
          <router-link to="/profile"><img src="/assets/icons/account-icon.svg" /></router-link>
        </li>
        <li class="btn-root">
          <router-link to="/comparison"><img src="/assets/icons/search-icon.svg" /></router-link>
        </li>
        <li class="btn-root">
          <router-link to=""><img src="/assets/icons/heart-icon.svg" /></router-link>
        </li>
        <li class="btn-root">
          <router-link to="" @click="toggleCartPopup"><img src="/assets/icons/basket-icon.svg" /></router-link>
        </li>
      </ul>
    </div>
    <teleport to="#app">
      <base-aside-popup v-if="isCartPopupOpen"></base-aside-popup>

    </teleport>
  </header>
</template>

<script>
import BaseAsidePopup from '../ui/BaseAsidePopup.vue';

export default {
  //TODO: сделать перезагрузку страницы если я уже на домашней
  components: { BaseAsidePopup },
  methods: {
    routeHome() {
      this.$router.push('/home');
    },
    toggleCartPopup() {
      this.$store.commit('header/toggleCartPopup')
    }
  },
  computed: {
    isCartPopupOpen() {
      return this.$store.getters['header/getCartPopupStatus'];
    },
  },
};
</script>

<style scoped>
header {
  height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 3.35rem 10rem 3.45rem 5.4rem;
  align-items: center;
}

.main-logo {
  width: 5rem;
  height: 3.2rem;
  cursor: pointer;
}

.logo-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  height: 4.1rem;
  padding-right: 26.6rem;
}

.icons-box {
  padding-left: 15.8rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

h1 {
  color: #000;
  font-family: Montserrat;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  cursor: pointer;
}

ul {
  display: flex;
  flex-direction: row;
  gap: 7.5rem;
  margin: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.icons-list {
  width: 24.7rem;
  gap: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0 0 5px;
}
</style>
