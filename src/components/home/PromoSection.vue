<template>
  <section class="promo-section">
    <div class="promo-box">
      <h6>New Arrival</h6>
      <h2>Discover Our New Collection</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <base-button class="btn">BUY Now</base-button>
    </div>
  </section>
</template>

<style scoped>
.promo-section {
  height: 71.7rem;
  background-image: url("../../assets/image/home/promo-homePage.png");
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
  padding: 6.2rem 5.6rem 3.7rem 3.9rem;
  background-color: #fff3e3;
}
.btn {
  width: 22.2rem;
  height: 7.4rem;
}
h6 {
  color: #333;
  /* font-family: Poppins; */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3rem;
}
h2 {
  color: #b88e2f;
  /* font-family: Poppins; */
  font-size: 5.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6.5rem;
}
</style>
