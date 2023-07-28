<template>
  <PromoShop></PromoShop>
  <FiltersShop></FiltersShop>
  <ShopItems></ShopItems>
  <!-- <OurAdvantages></OurAdvantages> -->
  <our-advantages></our-advantages>
</template>

<script>
import PromoShop from "../../components/shop/PromoShop.vue";
import FiltersShop from "../../components/shop/FiltersShop.vue";
// import OurAdvantages from "../../components/shop/OurAdvantages.vue";
import ShopItems from "../../components/shop/ShopItems.vue";

export default {
  components: {
    PromoShop,
    FiltersShop,
    // OurAdvantages,
    ShopItems,
  },
};
</script>
