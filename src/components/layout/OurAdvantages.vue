<template>
  <section>
    <div class="adv-card">
      <img src="/assets/icons/shop/advantages/shop-trophy.svg" alt="trophy icon" />
      <div>
        <h3>High Quality</h3>
        <p>crafted from top materials</p>
      </div>
    </div>
    <div class="adv-card">
      <img src="/assets/icons/shop/advantages/shop-guarantee.svg" alt="guarantee icon" />
      <div>
        <h3>Warranty Protection</h3>
        <p>Over 2 years</p>
      </div>
    </div>
    <div class="adv-card">
      <img src="/assets/icons/shop/advantages/shop-shipping.svg" alt="shipping icon" />
      <div>
        <h3>Free Shipping</h3>
        <p>Order over 150 $</p>
      </div>
    </div>
    <div class="adv-card">
      <img src="/assets/icons/shop/advantages/shop-support.svg" alt="support icon" />
      <div>
        <h3>24 / 7 Support</h3>
        <p>Dedicated support</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
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

h3 {
  /* color: #242424;
  font-family: Poppins; */
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  text-align: start;
}

p {
  color: #898989;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-align: start;
}
</style>
