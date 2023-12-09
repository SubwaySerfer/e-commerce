<template>
  <div class="cart-page">
    <base-promo title="Cart" startPage="Home" currentPage="Cart" imgLink="/assets/icons/mainLogo.png"></base-promo>
    <section class="cart-list">
      <div>
        <ul class="cart-list__nav">
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
        <cart-list></cart-list>
      </div>

      <div class="cart-list__costs">
        <h2 class="costs__title">Cart Totals</h2>
        <ul class="costs__price-list">
          <li class="price-list__block">
            <h4 class="price-list__title">Subtotal</h4>
            <span class="price-list__total-sm">Rs. 250,000.00</span>
          </li>
          <li class="price-list__block">
            <h4 class="price-list__title">Total</h4>
            <span class="price-list__total-bg">Rs. 250,000.00</span>
          </li>
        </ul>
        <button class="costs__btn">Check Out</button>
      </div>
    </section>
    <our-advantages></our-advantages>
  </div>
</template>

<script>
import CartList from '../../components/cart/CartList.vue';

export default {
  components: {
    CartList,
  },
};
</script>

<style scoped>
.cart-page {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #000;
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
  padding-left: 14.2rem;
  align-items: center;
  gap: 10rem;
  background: #f9f1e7;
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
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
  align-items: center;
  padding-top: 1.5rem;
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
}

.costs__title {
  font-size: 3.2rem;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 6.1rem;
}

.costs__price-list {
  width: 24.3rem;
  display: flex;
  flex-direction: column;
  gap: 3.1rem;
  margin-bottom: 4.2rem;
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
}</style>
