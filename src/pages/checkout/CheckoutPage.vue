<template>
  <main>
    <base-promo title="Checkout" startPage="Home" currentPage="Checkout"
      imgLink="/assets/icons/mainLogo.png"></base-promo>
    <section class="checkout-section">
      <checkout-form></checkout-form>
      <price-block></price-block>
    </section>
  </main>
</template>

<script>
import CheckoutForm from '../../components/checkout/CheckoutForm.vue'
import PriceBlock from '../../components/checkout/PriceBlock.vue'

export default {
  components: { CheckoutForm, PriceBlock }
}
</script>

<style scoped>
.checkout-section {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2.6rem;
}
</style>