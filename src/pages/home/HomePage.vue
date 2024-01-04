<template>
  <main>
    <PromoSection></PromoSection>
    <RoomsSection></RoomsSection>
    <OurProductsSection></OurProductsSection>
    <SearchRoom></SearchRoom>
    <FuniroFurniture></FuniroFurniture>
  </main>
</template>

<script>
import PromoSection from "../../components/home/PromoSection.vue";
import RoomsSection from "../../components/home/RoomsSection.vue";
import OurProductsSection from "../../components/home/OurProductsSection.vue";
import SearchRoom from "../../components/home/SearchRoom.vue";
import FuniroFurniture from "../../components/home/FuniroFurniture.vue";

export default {
  components: {
    PromoSection,
    RoomsSection,
    OurProductsSection,
    SearchRoom,
    FuniroFurniture,
  },
};
</script>
