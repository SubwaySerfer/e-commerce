<template>
  <form class="checkout-form">
    <h2 class="checkout-form__title">Billing details</h2>
    <div class="checkout-form__fullname">
      <label for="firstName" class="checkout-form__label">First Name<input class="checkout-form__input"
          type="text"></label>
      <label for="lastName" class="checkout-form__label">Last Name<input class="checkout-form__input" type="text"></label>
    </div>
    <label class="checkout-form__label" for="company">Company Name (Optional)<input class="checkout-form__input"
        type="text"></label>
    <label class="checkout-form__label" for="country">Country / Region<input class="checkout-form__input"
        type="text"></label>
    <label class="checkout-form__label" for="street">Street address<input class="checkout-form__input"
        type="text"></label>
    <label class="checkout-form__label" for="city">Town / City<input class="checkout-form__input" type="text"></label>
    <label class="checkout-form__label" for="province">Province<input class="checkout-form__input" type="text"></label>
    <label class="checkout-form__label" for="ZIP">ZIP code<input class="checkout-form__input" type="numeric"></label>
    <label class="checkout-form__label" for="phone">Phone<input class="checkout-form__input" type="numeric"></label>
    <label class="checkout-form__label" for="email">Email address<input class="checkout-form__input" type="email"></label>
    <label class="checkout-form__label" for=""><input class="checkout-form__input" type="text"
        placeholder="Additional information"></label>
  </form>
</template>

<style scoped>
.checkout-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60.8rem;
  padding: 3.8rem 7.9rem 7.1rem 7.3rem;
  gap: 3.6rem;
}

.checkout-form__title {
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
  align-self: flex-start;
}

.checkout-form__fullname {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3.1rem;
  width: 100%;
  justify-content: space-between;
}

.checkout-form__label {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.2rem;
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: start;
}

.checkout-form__input {
  height: 7.5rem;
  border-radius: 1rem;
  border: 1px solid #9F9F9F;
  background: #FFF;
  padding: 2.6rem 0 2.5rem 2.9rem;
  color: #9F9F9F;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>