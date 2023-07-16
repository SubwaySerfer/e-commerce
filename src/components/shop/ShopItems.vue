<template>
  <section>
    <div class="cards-list">
      <base-card
        v-for="furniture in this.furnitureList"
        :name="furniture.name"
        :img="furniture.img"
        :price="furniture.price"
        :description="furniture.description"
      ></base-card>
      <base-card
        v-for="furniture in this.furnitureList"
        :name="furniture.name"
        :img="furniture.img"
        :price="furniture.price"
        :description="furniture.description"
      ></base-card>
    </div>
    <div class="slider">
      <div class="slider-item slider-active">1</div>
      <div class="slider-item">2</div>
      <div class="slider-item">3</div>
      <div class="slider-item next-item">Next</div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    furnitureList() {
      return this.$store.getters["home/furnitureList"];
    },
  },
};
</script>

<style scoped>
section {
  padding: 6.3rem 10.5rem 8.6rem 9.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  gap: 4rem;
}
.cards-list {
  display: flex;
  flex-flow: row wrap;
  gap: 4.2rem 3.2rem;
}
.slider {
  padding-top: 3rem;
  gap: 3.8rem;
  display: flex;
  flex-direction: row;
}
.slider-item {
  width: 6rem;
  height: 6rem;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 1rem;
  background: #f9f1e7;
  cursor: pointer;
}
.slider-active {
  color: #fff;
  background: #b88e2f;
}
.next-item {
  width: 9.8rem;
}
</style>
