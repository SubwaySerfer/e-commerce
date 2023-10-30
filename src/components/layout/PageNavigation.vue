<template>
  <section class="navigation">
    <h5 class="navigation__page-title">{{ mainPage }}</h5>
    <img
      src="src/assets/icons/shop/arrow.svg"
      alt="arrow"
      class="navigation__icon"
    />
    <h5 class="navigation__page-title right-padding">{{ currentPage }}</h5>
    <img
      src="src/assets/icons/shop/arrow.svg"
      alt="arrow"
      class="navigation__icon"
    />
    <span class="navigation__line"></span>
    <h5 class="navigation__card-name">{{ cardName }}</h5>
  </section>
</template>

<script>
export default {
  props: ["mainPage", "currentPage", "cardName"],
};
</script>

<style scoped>
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
