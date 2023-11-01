<template>
  <section class="navigation">
    <router-link :to="mainPageName">
      <h5 class="navigation__page-title">{{ mainPage }}</h5>
    </router-link>

    <img
      src="src/assets/icons/shop/arrow.svg"
      alt="arrow"
      class="navigation__icon"
    />
    <router-link :to="currentPageName">
      <h5 class="navigation__page-title right-padding">{{ currentPage }}</h5>
    </router-link>
    <img
      src="src/assets/icons/shop/arrow.svg"
      alt="arrow"
      class="navigation__icon"
    />
    <span class="navigation__line"></span>
    <router-link :to="cardPageName">
      <h5 class="navigation__card-name">{{ cardName }}</h5>
    </router-link>
  </section>
</template>

<script>
export default {
  props: [
    "mainPage",
    "currentPage",
    "cardName",
    "mainPageName",
    "cardPageName",
    "currentPageName",
  ],
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.navigation {
  width: 144rem;
  height: 10rem;
  background: #f9f1e7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 9.9rem;
}
.navigation__page-title {
  color: #9f9f9f;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.navigation__card-name {
  color: #000;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.navigation__icon {
  width: 2rem;
  height: 2rem;
  margin-right: 2.4rem;
}

.navigation__line {
  width: 0.2rem;
  height: 3.7rem;
  background: #9f9f9f;
  margin-right: 3.4rem;
}
.navigation__page-title:first-child {
  margin-right: 1.4rem;
}
.right-padding {
  padding-right: 2.1rem;
}
</style>
