<template>
  <main class="cart-page">
    <base-promo title="Cart" startPage="Home" currentPage="Cart" imgLink="/assets/icons/mainLogo.png"></base-promo>
    <section class="cart-list">
      <div class="nav-box">
        <ul class="cart-list__nav">
          <li>Product</li>
          <li>Quantity</li>
          <!-- <li>Subtotal</li> -->
          <li>Price</li>
          <li class="empty"></li>
        </ul>
        <cart-list></cart-list>
      </div>

      <div class="cart-list__costs">
        <h2 class="costs__title">Cart Totals</h2>
        <ul class="costs__price-list">
          <!-- <li class="price-list__block">
            <h4 class="price-list__title">Subtotal</h4>
            <span class="price-list__total-sm">Rs. {{ getTotal }}</span>
          </li> -->
          <li class="price-list__block">
            <h4 class="price-list__title">Total</h4>
            <span class="price-list__total-bg">Rs. {{ getTotal }}</span>
          </li>
        </ul>
        <router-link to="/checkout">
          <button class="costs__btn">Check Out</button>
        </router-link>
      </div>
    </section>
    <our-advantages></our-advantages>
  </main>
</template>

<script>
import CartList from '../../components/cart/CartList.vue';

export default {
  components: {
    CartList,
  },
  computed: {
    getTotal() {
      return this.$store.getters['home/getSubtotal']
    }
  }
};
</script>

<style scoped>
.cart-page {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #000;
}

.nav-box {
  min-height: 20rem;

}

.cart-list {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 7.2rem 10rem 8.5rem;
}

.cart-list__nav {
  width: 81.7rem;
  height: 5.5rem;
  /* padding-left: 19rem; */
  align-items: center;
  /* gap: 9.6rem; */
  gap: 17.4%;
  background: #f9f1e7;
  display: flex;
  flex-direction: row;
  justify-content: end;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  padding: 0 2rem 0 0;
}

li {
  list-style-type: none;
}

.cart-list__costs {
  width: 39.3rem;
  height: 39rem;
  background: #f9f1e7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 1rem;
  align-items: center;
}

.costs__btn {
  width: 22.2rem;
  height: 5.8954rem;
  border-radius: 1.5rem;
  border: 1px solid #000;
  background: transparent;
  font-size: 2rem;
  font-weight: 400;
  line-height: normal;
  color: #000
}

.costs__title {
  font-size: 3.2rem;
  font-weight: 600;
  line-height: normal;
  /* margin-bottom: 6.1rem; */
}

.costs__price-list {
  width: 24.3rem;
  display: flex;
  flex-direction: column;
  gap: 3.1rem;
  /* margin-bottom: 4.2rem; */
}

.price-list__title {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
}

.price-list__block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.price-list__total-sm {
  color: #9f9f9f;
  font-size: 1.6rem;
  line-height: normal;
}

.price-list__total-bg {
  color: #b88e2f;
  font-size: 2rem;
  font-weight: 500;
  line-height: normal;
}

@media(max-width: 1400px) {
  .cart-list {
    padding: 7.2rem 3vw 8.5rem;
  }
}

@media(max-width: 1270px) {
  .cart-list {
    padding: 5rem 3vw 8.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
}

@media(max-width: 900px) {
  .cart-list__nav {
    width: 100%;
    /* padding: 0 5rem 0 18.5rem; */
    /* gap: 3rem; */
    justify-content: center;
    gap: 14vw;
  }

  .empty {
    display: none;
  }

  .nav-box {
    width: 100%;
    padding: 0 1rem;
  }
}

/* @media(max-width: 825px) {
  .cart-list__nav {
    gap: 9vw;
    padding-left: 21.81vw;
  }
} */

@media(max-width:770px) {
  .cart-list__nav {
    gap: 10vw;

  }
}

@media(max-width: 650px) {
  .cart-list__nav {
    /* padding-left: 16vw; */
    /* gap: 7vw; */
    font-size: 1.4rem;
  }

  .cart-list {
    padding: 5rem 1vw 5rem;
  }
}

@media(max-width:500px) {
  .cart-list__nav {
    /* padding-left: 16vw; */
    /* gap: 5vw; */
    font-size: 1.2rem;
  }

  .cart-list__costs {
    width: 95vw;
    border-radius: 1rem
  }
}

@media(max-width: 400px) {
  .nav-box {
    padding: 0;
  }

  /* .cart-list__nav {
    gap: 7vw;
  } */
}
</style>
