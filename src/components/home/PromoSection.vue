<template>
  <section class="promo-section">
    <div class="promo-section__promo-box">
      <h6 class="promo-box__label__info">New Arrival</h6>
      <h1 class="promo-box__label">
        Discover Our<br />
        New Collection
      </h1>
      <p class="promo-box__text">
        Dive into our latest collection, where each piece is a blend of style and comfort, crafted with the finest
        materials. Experience a new level of elegance and sophistication that enhances your unique style.</p>
      <base-button class="promo-box__btn" @click="this.$router.push('/shop')">
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

.promo-section__promo-box {
  display: flex;
  flex-direction: column;
  width: 64.3rem;
  height: 44.3rem;
  padding: 6.2rem 5.6rem 3.7rem 4.1rem;
  background-color: #fff3e3;
  justify-content: start;
  text-align: start;
}

.promo-box__btn {
  width: 22.2rem;
  height: 7.4rem;
  border-radius: 0;
  margin-left: -3px;
  cursor: pointer;
  background-color: #b88e2f;
  transition: ease-in 0.25s;
}

.promo-box__btn:hover {
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

.promo-box__text {
  color: #333;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  text-align: start;
  padding-bottom: 2.1rem;
}

.promo-box__label__info {
  color: #333;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3rem;
  padding-bottom: 0.4rem;
}

.promo-box__label {
  color: #b88e2f;
  font-size: 5.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6.5rem;
  padding-bottom: 1.3rem;
}

@media(max-width: 1439px) {
  .promo-section {
    padding-right: 4vw;
    width: 100%;
    background-position: center center;
  }
}

@media(max-width: 1000px) {
  .promo-section {
    padding-top: 10vh;

  }

  .promo-section__promo-box {
    width: 44.65vw;
    height: auto;
    padding: 3rem 2rem;
  }

  .promo-box__text {
    padding-bottom: 1.5rem;
  }

  .promo-box__label {
    font-size: 4rem;
    line-height: 5rem;

  }
}

@media (max-width: 750px) {
  .promo-section {
    justify-content: center;
    padding-top: 15vh;
    padding-right: 0;
  }

  .promo-section__promo-box {
    width: 80vw;
  }

  .promo-box__text {
    padding-bottom: 3vh;
  }
}

@media (max-width: 450px) {
  .promo-section__promo-box {
    width: 90vw;
  }

  .promo-section {
    padding-right: 0;
    padding-top: 5rem;
  }

  .promo-box__btn {
    width: 80vw;
  }

  .promo-box__label {
    text-align: center;
  }

  .promo-box__text {
    text-align: center;
  }
}
</style>
