<template>
  <main>
    <promo-shop></promo-shop>
    <filters-shop></filters-shop>
    <shop-items></shop-items>
    <our-advantages></our-advantages>
  </main>
</template>

<script>
import PromoShop from "../../components/shop/PromoShop.vue";
import FiltersShop from "../../components/shop/FiltersShop.vue";
import ShopItems from "../../components/shop/ShopItems.vue";

export default {
  components: {
    PromoShop,
    FiltersShop,
    ShopItems,
  },
};
</script>
