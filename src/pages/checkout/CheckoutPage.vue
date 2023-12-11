<template>
  <main>
    <base-promo title="Checkout" startPage="Home" currentPage="Checkout"
      imgLink="/assets/icons/mainLogo.png"></base-promo>
    <section>
      <checkout-form></checkout-form>
    </section>
  </main>
</template>

<script>
import CheckoutForm from '../../components/checkout/CheckoutForm.vue'
export default {
  components: { CheckoutForm }
}
</script>