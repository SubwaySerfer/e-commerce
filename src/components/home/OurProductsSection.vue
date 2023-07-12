<template>
  <section>
    <h2>Our Products</h2>
    <div class="furnitures-list">
      <base-card
        v-for="furniture in this.furnitureList"
        :name="furniture.name"
        :img="furniture.img"
        :price="furniture.price"
        :description="furniture.description"
      >
        <!-- <p>{{ furniture }}</p> -->
      </base-card>
      <!-- <div>{{ furnitureList }}</div> -->
      <!-- <div class="furniture-card">
        <img src="" alt="" />
        <h3></h3>
        <p>Stylish cafe chair</p>
      </div> -->
    </div>
    <base-button class="btn">Show More</base-button>
  </section>
</template>

<script>
export default {
  // data() {
  //   return { newList: this.furnitureList };
  // },
  computed: {
    furnitureList() {
      return this.$store.getters["home/furnitureList"];
    },
  },
};
</script>

<style scoped>
section {
  height: auto;
  padding: 0.4rem 10.2rem 6.9rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}
h2 {
  color: #3a3a3a;
  text-align: center;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-indent: 5px;
}
.furnitures-list {
  height: 92.4rem;
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
  flex-wrap: wrap;
  margin-top: 1.2rem;
}
.btn {
  width: 24.5rem;
  height: 4.8rem;
  margin-top: 1.2rem;
  padding: auto;
  color: #b88e2f;
  background-color: transparent;
  font-size: 1.6rem;
  font-style: normal;
  border-radius: 0;
  font-weight: 600;
  line-height: 150%;
  text-indent: 9px;
}
</style>
