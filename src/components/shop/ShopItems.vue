<template>
  <section class="cards-wrapper">
    <div class="cards-list">
      <base-card v-for="furniture, index in this.furnitureList" :name="furniture.name" :img="furniture.img"
        :price="furniture.price" :description="furniture.description" :id="furniture.id"
        @click="test(furniture.id, index)"></base-card>
      <base-card v-for="furniture in this.furnitureList" :name="furniture.name" :img="furniture.img"
        :price="furniture.price" :description="furniture.description" :id="furniture.id"></base-card>
    </div>
    <buttons-field></buttons-field>
  </section>
</template>

<script>
import ButtonsField from "../ui/ButtonsField.vue";

export default {
  components: {
    ButtonsField,
  },
  computed: {
    furnitureList() {
      return this.$store.getters["home/furnitureList"];
    },
  },
  methods: {
    test(id, index) {
      console.log(index, id, this.furnitureList[index])
    }
  }
};
</script>

<style scoped>
.cards-wrapper {
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
  justify-content: space-around;
}


@media(max-width: 1250px) {
  .cards-wrapper {
    padding: 6.3rem 4rem 8.6rem 4rem;
  }
}
</style>
