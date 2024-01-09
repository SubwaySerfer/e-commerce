<template>
  <header class="header">
    <div class="header__logo-box">
      <img src="/assets/icons/mainLogo.png" alt="furniro logo" class="logo-box__main-logo" @click="this.routeHome" />
      <h2 @click="this.routeHome" class="logo-box__label">Furniro</h2>
    </div>
    <nav class="header__nav" v-if="windowWidth > 770">
      <ul class=" nav__nav-list ul-list">
        <li class="btn-root"><router-link to="/">Home</router-link></li>
        <li class="btn-root"><router-link to="/shop">Shop</router-link></li>
        <li class="btn-root"><router-link to="/blog">Blog</router-link></li>
        <li class="btn-root">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <div class="icons-box" v-if="windowWidth > 770">
      <ul class="icons-box__icons-list ul-list">
        <li class="btn-root">
          <router-link to="/profile"><img src="/assets/icons/account-icon.svg" /></router-link>
        </li>
        <!-- <li class="btn-root">
          <router-link to="/comparison"><img src="/assets/icons/search-icon.svg" /></router-link>
        </li> -->
        <li class="btn-root">
          <router-link to="/wishlist"><img src="/assets/icons/heart-icon.svg" /></router-link>
        </li>
        <li class="btn-root">
          <router-link to="" @click="toggleCartPopup"><img src="/assets/icons/basket-icon.svg" /></router-link>
        </li>
      </ul>
    </div>

    <div v-else class="burger" @click="toggleBurger">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <nav class="burger-wrapper" v-if="isBurgerOpen && windowWidth < 770">
        <ul class="burger-page__list">
          <li class="btn-root "><router-link to="/">Home</router-link></li>
          <span class="burger-icons__line"></span>
          <li class="btn-root burger-list__btn"><router-link to="/shop">Shop</router-link></li>
          <span class="burger-icons__line"></span>
          <li class="btn-root burger-list__btn"><router-link to="/blog">Blog</router-link></li>
          <span class="burger-icons__line"></span>
          <li class="btn-root burger-list__btn">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
        <ul class="burger-icons__list">
          <li class="btn-root">
            <router-link to="/profile"><img src="/assets/icons/account-icon.svg" /></router-link>
          </li>
          <!-- <li class="btn-root">
            <router-link to="/comparison"><img src="/assets/icons/search-icon.svg" /></router-link>
          </li> -->
          <li class="btn-root">
            <router-link to="/wishlist"><img src="/assets/icons/heart-icon.svg" /></router-link>
          </li>
          <li class="btn-root">
            <router-link to="/cart"><img src="/assets/icons/basket-icon.svg" /></router-link>
          </li>
        </ul>
      </nav>
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
  data() {
    return {
      windowWidth: window.innerWidth,
      isBurgerOpen: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    routeHome() {
      this.$router.push('/home');
    },
    toggleCartPopup() {
      this.$store.commit('header/toggleCartPopup')
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    toggleBurger() {
      this.isBurgerOpen = !this.isBurgerOpen
    },
    closeCartPopup() {
      this.$store.commit('header/closeCartPopup')
    }
  },
  watch: {
    windowWidth(val) {
      if (val < 770) this.closeCartPopup()
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
.header {
  height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* padding: 3.35rem 10rem 3.45rem 5.4rem; */
  padding: 3.35rem 6rem 3.45rem 5rem;
  align-items: center;
}

.logo-box__main-logo {
  width: 5rem;
  height: 3.2rem;
  cursor: pointer;
}

.header__logo-box {
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

.logo-box__label {
  color: #000;
  font-family: Montserrat;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  cursor: pointer;
}

.ul-list {
  display: flex;
  flex-direction: row;
  gap: 7.5rem;
  margin: 0;
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

.icons-box__icons-list {
  /* width: 24.7rem; */
  width: min-content;

  gap: 4.5rem;
  display: flex;
  /* justify-content: center; */
  justify-content: end;
  align-items: center;
  padding: 7px 0 0 5px;
}

.burger {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  z-index: 4;
}

.burger__line {
  width: 3.5rem;
  height: .4rem;
  background-color: #cfc7bc;
  z-index: 5;
}

.burger-wrapper {
  position: absolute;
  width: 80vw;
  top: 0;
  right: 0;
  height: auto;
  border-radius: 1rem 0 0 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 7.5rem 1rem 3rem;
}

.burger-page__list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.6rem;
  justify-content: space-around;
}

/* .burger-list__btn {
  border-top: 1px solid;
  padding-top: 1rem;
} */

.burger-icons__line {
  height: 2px;
  width: 100%;
  background-color: #cfc7bc
}

.burger-icons__list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media (max-width: 1420px) {


  .header__logo-box {
    padding-right: 0
  }

  .icons-box {
    padding-left: 0;
    width: min-content;
  }

  .header {
    justify-content: space-between;
    gap: 6vw;
  }
}

@media (max-width: 1100px) {
  .nav__nav-list {
    gap: 3.2vw;
  }

  .header {
    padding: 3.35rem 3vw 3.45rem;
    gap: .5rem;
  }

  .icons-box__icons-list {
    gap: 3.5rem;
  }
}

@media (max-width: 770px) {
  .header {
    padding: 5rem 5vw
  }
}

@media (max-width: 450px) {
  .burger-wrapper {
    width: 100vw;
    border-radius: 0
  }
}
</style>
