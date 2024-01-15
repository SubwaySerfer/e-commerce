<template>
  <div class="price-block">
    <div class="label-block">
      <h3 class="label-block__label">Product</h3>
      <h3 class="label-block__label">Subtotal</h3>
    </div>
    <ul class="cart-list">
      <li class="item">
        <p><span>X</span></p>
        <p></p>
      </li>
      <li class="item">
        <p>Total</p>
        <strong></strong>
      </li>
    </ul>
    <div class="info-block">
      <div class="bank-block">
        <figure class="ellipse"></figure>
        <h5 class="bank-block__label">Direct Bank Transfer</h5>
      </div>
      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order
        will not be shipped until the funds have cleared in our account.</p>
      <div>
        <figure></figure>
        <h5>Direct Bank Transfer</h5>
      </div>
      <div>
        <figure></figure>
        <h5>Cash On Delivery</h5>
      </div>
      <p>Your personal data will be used to support your experience throughout this website, to manage access to your
        account, and for other purposes described in our <bold>privacy policy.</bold>
      </p>
    </div>
    <base-button class="price-block__btn" mode='transparent-btn'>Place order</base-button>
  </div>
</template>

<style scoped>
.price-block {
  padding: 8.7rem 3.7rem;
  width: 60.8rem;

}

.cart-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid#D9D9D9;
  justify-content: space-between;
  margin: 0;
}

.label-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.4rem;
}

.label-block__label {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.bank-block {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: start;
}

.bank-block__label {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.ellipse {
  width: 1.4rem;
  height: 1.4rem;
  background: #000;
  border-radius: 1rem;
  margin: 0;
}

.info-block {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  margin-top: 2.25rem;
}

.price-block__btn {
  border-radius: 1.5rem;
  width: 31.8rem;
  height: 6.4rem;
  color: #000;
  font-family: Poppins;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>