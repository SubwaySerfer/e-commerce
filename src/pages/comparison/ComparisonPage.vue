<template>
  <main class="comparison">
    <base-promo
      title="Product Comparison"
      startPage="Home"
      currentPage="Comparison"
      imgLink="assets/icons/mainLogo.png"
    ></base-promo>
    <comparison-products></comparison-products>
    <our-advantages></our-advantages>
  </main>
</template>

<script>
import ComparisonProducts from '../../components/comparison/ComparisonProducts.vue';

export default {
  components: { ComparisonProducts },
};
</script>

<style scoped>
.comparison {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
