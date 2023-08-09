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
    <base-button class="btn">
      <router-link to="/shop" class="btn-text">Show More</router-link>
    </base-button>
    <!-- <base-button class="btn">
      <router-link to="/shop" class="btn-text">BUY Now</router-link>
    </base-button> -->
  </section>
</template>
<!--let currentLink = '/' + payload
  //   return currentLink
       :to="this.$store.commit('home/creatLinkToButton', shop)" -->

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
  background-color: transparent;
  font-size: 1.6rem;
  font-style: normal;
  border-radius: 0;
  font-weight: 600;
  line-height: 150%;
  text-indent: 9px;
  transition: ease-in 0.25s;
}
.btn:hover {
  transform: scale(1.1);
  background-color: #b88e2f;
  color: white;
}
.btn:hover > .btn-text {
  color: white;
}

.btn-text {
  text-transform: uppercase;
  text-decoration: none;
  color: #b88e2f;
  transition: ease-in 0.25s;
  /* color: #ffffff; */
}
/* .btn-text:hover {
  color: white;
} */
</style>
