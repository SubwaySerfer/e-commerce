<template>
  <main>
    <base-promo title="Shop" startPage="Home" currentPage="Shop"></base-promo>
    <filters-shop></filters-shop>
    <shop-items></shop-items>
    <our-advantages></our-advantages>
  </main>
</template>

<script>
import FiltersShop from "../../components/shop/FiltersShop.vue";
import ShopItems from "../../components/shop/ShopItems.vue";

export default {
  components: {
    FiltersShop,
    ShopItems,
  },
};
</script>
