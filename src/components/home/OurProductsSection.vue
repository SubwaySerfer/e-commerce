<template>
  <section class="products">
    <h2 class="products__label">Our Products</h2>
    <div class="furnitures-list">
      <base-card v-for="furniture in this.furnitureList" :name="furniture.name" :img="furniture.img"
        :price="furniture.price" :description="furniture.description" :id="furniture.id" mode='add-width'>
      </base-card>
    </div>
    <!-- <base-button class="btn"> -->
    <router-link to="/shop" class="btn-text btn">Show More</router-link>
    <!-- </base-button> -->
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
.products {
  height: auto;
  padding: 0.4rem 10.2rem 6.9rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
}

.products__label {
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
  border: 1px solid #b88e2f;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn:hover {
  transform: scale(1.1);
  background-color: #b88e2f;
  color: white;
}

.btn:hover>.btn-text {
  color: white;
  /* background-color: #b88e2f; */
}


.btn-text {
  text-decoration: none;
  color: #b88e2f;
  transition: ease-in 0.25s;
}


@media (max-width: 1450px) {
  .products {
    /* padding: .4rem .69vw 6.9rem; */
    padding: .4rem .69vw 0;
    width: 100%;
  }

  .furnitures-list {
    height: auto;
    justify-content: center;
    width: 100%;
  }
}

@media(max-width: 1300px) {
  .furnitures-list {
    gap: 1.5vw;
  }
}

@media(max-width: 720px) {
  .products {
    gap: 2rem;
  }

  .furnitures-list {
    gap: 4vw;
  }

  .btn:hover {
    transform: scale(1.05);
  }
}

@media(max-width: 450px) {
  .furnitures-list {
    gap: 3rem;
  }
}
</style>
