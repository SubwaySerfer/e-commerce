<template>
  <section>
    <promo-shop></promo-shop>
    <filters-shop></filters-shop>
    <shop-items></shop-items>
    <!-- <OurAdvantages></OurAdvantages> -->
    <our-advantages></our-advantages>
  </section>
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
