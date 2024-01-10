<template>
  <section class="cards-wrapper">
    <div class="cards-list">
      <base-card v-for="furniture in this.currentList" :name="furniture.name" :img="furniture.img"
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
  data() {
    return {
      currentList: []
    }
  },
  created() {
    this.createCurrentList()
  },
  computed: {
    furnitureList() {
      return this.$store.getters["home/furnitureList"];
    },
    showItems() {
      return this.$store.getters['home/getShowItems']
    }
  },
  watch: {
    showItems(newVal) {
      this.createCurrentList()
    }
  },
  methods: {
    createCurrentList(start = 0, end = this.showItems) {
      this.currentList = this.furnitureList.slice(start, end)
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

@media(max-width: 1445px) {
  .cards-wrapper {
    padding: 6.3rem 2rem 8.6rem;
  }

  .cards-list {
    justify-content: center;
  }
}

@media(max-width: 1300px) {
  .cards-wrapper {
    padding-left: 0;
    padding-right: 0;
  }

  .cards-list {
    column-gap: 1.5vw;
    row-gap: 2rem
  }
}

@media(max-width: 720px) {
  .cards-list {
    gap: 4vw;
  }
}

@media(max-width: 450px) {
  .cards-list {
    gap: 3rem;
  }
}
</style>
