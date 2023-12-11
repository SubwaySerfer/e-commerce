<template>
  <div class="popup">
    <div class="popup__header">
      <h2 class="header__label">Shopping Cart</h2>
      <img src="/assets/icons/ui/popup-cart.svg" alt="cart and exit button." class="header__icon"
        @click="toggleCartPopup" />
    </div>
    <span class="line"></span>

    <div class="popup__content">
      <ul class="content__cart-items">
        <li class="cart-items__sofa-block">
          <figure class="sofa-block__background">
            <img src="/public/assets/icons/cart/sofa-asgaard.png" alt="asgaard sofa."
              class="sofa-block__image sofa-block__image__down" />
          </figure>
          <div class="sofa-block__item-info">
            <h5 class="item-info__label">Asgaard sofa</h5>
            <p class="item-info__description">
              1 <span class="item-info__description__increase">X</span><span class="item-info__description__price">Rs.
                250,000.00</span>
            </p>
          </div>
          <img src="/public/assets/icons/ui/delete-item.svg" alt="delete item button." class="sofa-block__close-icon" />
        </li>
        <li class="cart-items__sofa-block">
          <figure class="sofa-block__background sofa-block__background__none">
            <img src="/public/assets/icons/cart/casaliving-sofa.png" alt="Casaliving sofa."
              class="sofa-block__image__normal" />
          </figure>
          <div class="sofa-block__item-info">
            <h5 class="item-info__label">Casaliving Wood</h5>
            <p class="item-info__description">1 <span class="item-info__description__increase">X</span><span
                class="item-info__description__price">Rs. 270,000.00</span></p>
          </div>
          <img src="/public/assets/icons/ui/delete-item.svg" alt="delete item button." class="sofa-block__close-icon" />
        </li>
        <!-- TODO: более адекватно сделать)) -->
      </ul>
      <div class="content__price-block">
        <h4 class="price-block__label">Subtotal</h4>
        <h4 class="price-block__total">Rs. 520,000.00</h4>
      </div>
    </div>
    <div class="popup__footer">
      <base-button :link="true" modeLabel="transparent-btn__label" to="/cart" linkName="Cart"
        mode="transparent-btn"></base-button>
      <base-button :link="true" modeLabel="transparent-btn__label" to="/checkout" linkName="Checkout"
        mode="transparent-btn"></base-button>
      <base-button :link="true" modeLabel="transparent-btn__label" to="/comparison" linkName="Comparison"
        mode="transparent-btn"></base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  methods: {
    toggleCartPopup() {
      this.$store.commit('header/toggleCartPopup')
    }
  }
};
</script>

<style scoped>
.popup {
  width: 41.7rem;
  height: 74.6rem;
  background: #fff;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000;
  font-family: Poppins;
  font-style: normal;
  line-height: normal;
}

.popup__header {
  height: 9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4rem 0 3rem;
  justify-content: space-between;
  width: 100%;
}

.header__label {
  font-size: 2.4rem;
  font-weight: 600;
}

.header__icon {
  width: 1.6625rem;
  height: 1.9rem;
  cursor: pointer;
}

.line {
  width: 28.7rem;
  height: 1px;
  background: #d9d9d9;
  margin-left: 3rem;
}

.popup__content {
  flex: 1;
  padding: 4.2rem 4rem 2.3rem 3rem;
  display: flex;
  flex-direction: column;
}

.content__cart-items {
  display: flex;
  flex-direction: column;
  flex: 1;
  list-style-type: none;
  gap: 2rem;
  overflow: auto;
}

.sofa-block__close-icon {
  cursor: pointer;
  /* TODO: добавить стили наведения */
}

.cart-items__sofa-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}

.sofa-block__background {
  width: 10.5rem;
  height: 10.5rem;
  border-radius: 1rem;
  background: rgba(184, 142, 47, 0.22);
  margin: 0;
}

.sofa-block__background__none {
  background: transparent;
  border-radius: 1rem;
}

.sofa-block__image__normal {
  border-radius: 1rem;
}

.sofa-block__image__down {
  transform: translateY(10px);
}

.sofa-block__item-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.item-info__label {
  font-size: 1.6rem;
  font-weight: 400;
  text-align: start;
}

.item-info__description {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.item-info__description__increase {
  font-size: 1.2rem;
}

.item-info__description__price {
  color: #b88e2f;
  font-size: 1.2rem;
  font-weight: 500;
}

.content__price-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.price-block__label {
  font-size: 16px;
  font-weight: 400;
}

.price-block__total {
  color: #b88e2f;
  font-size: 16px;
  font-weight: 600;
  padding-right: 6rem;
}

.popup__footer {
  border-top: 1px solid #d9d9d9;
  height: 8.4rem;
  display: flex;
  gap: 1.4rem;
  align-items: center;
  justify-content: center;
}
</style>
