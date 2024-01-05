<template>
  <section class="advnt-wrapper">
    <div class="adv-card">
      <img src="/assets/icons/shop/advantages/shop-trophy.svg" alt="trophy icon" />
      <div class="card-descr">
        <h3 class="card-descr__label">High Quality</h3>
        <p class="card-descr__description">crafted from top materials</p>
      </div>
    </div>
    <div class="adv-card">
      <img src="/assets/icons/shop/advantages/shop-guarantee.svg" alt="guarantee icon" />
      <div class="card-descr">
        <h3 class="card-descr__label">Warranty Protection</h3>
        <p class="card-descr__description">Over 2 years</p>
      </div>
    </div>
    <div class="adv-card">
      <img src="/assets/icons/shop/advantages/shop-shipping.svg" alt="shipping icon" />
      <div class="card-descr">
        <h3 class="card-descr__label">Free Shipping</h3>
        <p class="card-descr__description">Order over 150 $</p>
      </div>
    </div>
    <div class="adv-card">
      <img src="/assets/icons/shop/advantages/shop-support.svg" alt="support icon" />
      <div class="card-descr">
        <h3 class="card-descr__label">24 / 7 Support</h3>
        <p class="card-descr__description">Dedicated support</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advnt-wrapper {
  height: 27rem;
  background-color: #faf3ea;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 5.3rem;
  width: 100%;
}

.adv-card {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-descr__label {
  /* color: #242424;
  font-family: Poppins; */
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  text-align: start;
}

.card-descr__description {
  color: #898989;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-align: start;
}

@media(max-width: 1400px) {
  .advnt-wrapper {
    height: auto;
    justify-content: space-between;
    gap: 2rem;
    padding: 10rem 3rem;
  }
}

@media(max-width: 880px) {
  .advnt-wrapper {
    flex-wrap: wrap;
    padding: 8rem 3vw;
    gap: 2vw;
  }

  .adv-card {
    width: 45vw;
  }
}

@media(max-width: 640px) {
  .advnt-wrapper {
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 4vw;
  }

  .adv-card {
    width: 100%;
    padding-left: 5vw;
  }
}

@media(max-width: 400px) {

  .adv-card {
    padding-left: 0;
  }
}
</style>
