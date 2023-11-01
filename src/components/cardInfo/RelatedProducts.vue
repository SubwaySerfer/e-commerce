<template>
  <section class="related-section">
    <h2 class="related__title">Related Products</h2>
    <div class="related__cards">
      <base-card
        v-for="card in this.relatedCards"
        :name="card.name"
        :img="card.img"
        :price="card.price"
        :description="card.description"
      ></base-card>
    </div>
    <base-button
      :link="true"
      to="/shop"
      mode="white-btn"
      linkName="Show More"
    ></base-button>
  </section>
</template>

<script>
export default {
  created() {
    this.$store.commit("cardInfo/createRandomList");
  },
  computed: {
    relatedCards() {
      return this.$store.getters["cardInfo/getRandomList"];
    },
  },
};
</script>

<style scoped>
.related-section {
  height: 76.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.5rem;
}
.related__cards {
  height: 44.6rem;
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
  margin-bottom: 4.4rem;
}
.related__title {
  color: #000;
  font-family: Poppins;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2.6rem;
}
</style>
