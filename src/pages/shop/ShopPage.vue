<template>
  <PromoShop></PromoShop>
  <FiltersShop></FiltersShop>

  <OurAdvantages></OurAdvantages>
</template>

<script>
import PromoShop from "../../components/shop/PromoShop.vue";
import FiltersShop from "../../components/shop/FiltersShop.vue";
import OurAdvantages from "../../components/shop/OurAdvantages.vue";

export default {
  components: {
    PromoShop,
    FiltersShop,
    OurAdvantages,
  },
};
</script>
