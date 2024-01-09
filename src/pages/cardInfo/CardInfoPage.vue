<template>
  <main>
    <page-navigation mainPage="Home" currentPage="Shop" :cardName="currentItem.name" mainPageName="/home"
      currentPageName="/shop" cardPageName='/card-info'></page-navigation>
    <card-section :currentItem="currentItem"></card-section>
    <card-description></card-description>
    <related-products></related-products>
  </main>
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
  data() {
    return {
      id: this.$route.params['id'],
      // currentItem: {}
    }
  },
  // mounted() {
  //   console.log(this.furnitureList.find(el => el.id == this.id))
  // },
  watch: {
    $route(toRoute) {
      this.id = toRoute.params['id']
    }
  },
  computed: {
    currentItem() {
      return this.$store.getters["home/furnitureList"].find(el => el.id == this.id)
    },
  }
};
</script>

<style scoped></style>
