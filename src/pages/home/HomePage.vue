<template>
  <PromoSection></PromoSection>
  <RoomsSection></RoomsSection>
  <OurProductsSection></OurProductsSection>
</template>

<script>
import PromoSection from "../../components/home/PromoSection.vue";
import RoomsSection from "../../components/home/RoomsSection.vue";
import OurProductsSection from "../../components/home/OurProductsSection.vue";

export default {
  components: {
    PromoSection,
    RoomsSection,
    OurProductsSection,
  },
};
</script>
