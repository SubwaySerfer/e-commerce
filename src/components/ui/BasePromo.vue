<template>
  <section>
    <img :src="`${imgLink}`" alt="Company logo." v-if="imgLink" class="promo-logo" />
    <slot name="pageTitle">
      <h2>{{ title }}</h2>
      <div class="pages-info">
        <h4>{{ startPage }}</h4>
        <img src="assets/icons/shop/arrow.svg" alt="arrow." />
        <h5>{{ currentPage }}</h5>
      </div>
    </slot>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    startPage: {
      type: String,
      required: true,
    },
    currentPage: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
section {
  height: 31.6rem;
  background-image: url('assets/image/shopPage/promoShop.png');
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 9.5rem;
  justify-content: end;
  width: 100%;
}

.pages-info {
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  padding-top: 0.3rem;
  justify-content: center;
  /* padding-left: 2.4rem; */
}

h2 {
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

h4 {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

h5 {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.promo-logo {
  padding-bottom: 0.7rem;
}

.left-padding {
  padding-left: 59px;
}
</style>
