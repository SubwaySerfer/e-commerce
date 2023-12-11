<template>
  <section class="promo-section">
    <div class="promo-box">
      <h6>New Arrival</h6>
      <h2>
        Discover Our<br />
        New Collection
      </h2>
      <p class="promo-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <base-button class="btn" @click="this.$router.push('/shop')">
        <router-link to="/shop" class="btn-text">BUY Now</router-link>
      </base-button>
    </div>
  </section>
</template>

<style scoped>
.promo-section {
  height: 71.7rem;
  background-image: url('/assets/image/home/promo-homePage.png');
  display: flex;
  justify-content: flex-end;
  align-items: start;
  padding-top: 15.3rem;
  padding-right: 5.8rem;
}

.promo-box {
  display: flex;
  flex-direction: column;
  width: 64.3rem;
  height: 44.3rem;
  padding: 6.2rem 5.6rem 3.7rem 4.1rem;
  background-color: #fff3e3;
  justify-content: start;
  text-align: start;
}

.btn {
  width: 22.2rem;
  height: 7.4rem;
  border-radius: 0;
  margin-left: -3px;
  cursor: pointer;
  background-color: #b88e2f;
  transition: ease-in 0.25s;
}

.btn:hover {
  transform: scale(1.05);
}

.btn-text {
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.promo-text {
  color: #333;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  text-align: start;
  padding-bottom: 5.1rem;
}

h6 {
  color: #333;
  /* font-family: Poppins; */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3rem;
  padding-bottom: 0.4rem;
}

h2 {
  color: #b88e2f;
  font-size: 5.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6.5rem;
  padding-bottom: 1.3rem;
}
</style>
