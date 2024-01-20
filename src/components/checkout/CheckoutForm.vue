<template>
  <form class="checkout-form">
    <h2 class="checkout-form__title">Billing details</h2>
    <div class="checkout-form__fullname">
      <label for="firstName" class="fullname__label">First Name<input class="fullname__input" type="text"></label>
      <label for="lastName" class="fullname__label">Last Name<input class="fullname__input" type="text"></label>
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
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.fullname__input {
  border-radius: 1rem;
  border: 1px solid #9F9F9F;
  background: #FFF;
  height: 7.5rem;
  width: 100%;
  margin-top: 2.2rem;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.fullname__label {
  text-align: start;
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
  padding: 2.6rem .5rem 2.5rem 2.9rem;
  color: #9F9F9F;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media(max-width: 1100px) {
  .checkout-form {
    /* width: 60.8rem; */
    padding: 3.8rem 2rem 4rem;
    gap: 2.6rem;
  }

  .checkout-form__label,
  .fullname__label {
    gap: 1.2rem
  }

  .checkout-form__input,
  .fullname__input {
    padding: 1.6rem .5rem 1.5rem 1.9rem;
  }
}

@media(max-width: 630px) {
  .checkout-form {
    width: 100%;
  }

  .checkout-form__fullname {
    gap: 1rem;
  }
}

@media(max-width: 450px) {
  .checkout-form {
    padding: 3.8rem 2vw 4rem;
  }
}
</style>