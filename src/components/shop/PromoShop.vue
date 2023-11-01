<template>
  <section>
    <h2>Shop</h2>
    <div class="pages-info">
      <h4>Home</h4>
      <img src="/src/assets/icons/shop/arrow.svg" alt="arrow" />
      <h5>Shop</h5>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 31.6rem;
  background-image: url("/src/assets/image/shopPage/promoShop.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12.1rem;
}
.pages-info {
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  padding-top: 0.3rem;
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
/* .line-first {
  width: 2px;
  height: 10px;
  transform: rotate(-45deg);
  background-color: black;
  display: block;
}
.line-sec {
  width: 2px;
  height: 10px;
  transform: rotate(45deg);
  background-color: black;
  display: block;
  transform: translateY(3px);
} */
</style>
