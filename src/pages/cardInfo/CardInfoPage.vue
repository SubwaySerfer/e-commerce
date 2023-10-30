<template>
  <div>
    <page-navigation
      mainPage="Home"
      currentPage="Shop"
      cardName="Asgaard sofa"
    ></page-navigation>
    <card-section></card-section>
    <card-description></card-description>
    <related-products></related-products>
  </div>
</template>

<script>
import PageNavigation from "../../components/layout/PageNavigation.vue";
import CardSection from "../../components/cardInfo/CardSection.vue";
import CardDescription from "../../components/cardInfo/CardDescription.vue";
import RelatedProducts from "../../components/cardInfo/RelatedProducts.vue";

export default {
  components: {
    PageNavigation,
    CardSection,
    CardDescription,
    RelatedProducts,
  },
};
</script>

<style scoped></style>
