<template>
  <section>
    <h2>Our Products</h2>
    <div class="furnitures-list">
      <base-card v-for="furniture in furnitureList"
        >{{ furniture }}
        <p>{{ furniture }}</p></base-card
      >
      <!-- <div class="furniture-card">
        <img src="" alt="" />
        <h3></h3>
        <p>Stylish cafe chair</p>
      </div> -->
    </div>
    <base-button>Show More</base-button>
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
  height: auto;
  padding: 5.6rem 10.2rem 6.9rem;
}
h2 {
  color: #3a3a3a;
  text-align: center;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}
</style>
