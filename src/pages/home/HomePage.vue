<template>
  <PromoSection></PromoSection>
  <RoomsSection></RoomsSection>
  <OurProductsSection></OurProductsSection>
  <SearchRoom></SearchRoom>
</template>

<script>
import PromoSection from "../../components/home/PromoSection.vue";
import RoomsSection from "../../components/home/RoomsSection.vue";
import OurProductsSection from "../../components/home/OurProductsSection.vue";
import SearchRoom from "../../components/home/SearchRoom.vue";

export default {
  components: {
    PromoSection,
    RoomsSection,
    OurProductsSection,
    SearchRoom,
  },
};
</script>
