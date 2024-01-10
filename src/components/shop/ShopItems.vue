<template>
  <section class="cards-wrapper">
    <div class="cards-list">
      <base-card v-for="furniture in this.currentList" :name="furniture.name" :img="furniture.img"
        :price="furniture.price" :description="furniture.description" :id="furniture.id"></base-card>
    </div>
    <buttons-field :buttonsCounter="buttonsCounter" :curPage="currentPage"
      @change-page="changePageNumber"></buttons-field>
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
      currentList: [],
      buttonsCounter: 1,
      currentPage: 1,
    }
  },
  created() {
    this.createCurrentList()
    this.ceeperButtonsField()

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
      this.ceeperButtonsField()
    },
    currentPage(newVal, oldVal) {
      let start = (this.currentPage - 1) * this.showItems
      this.createCurrentList(start, start + this.showItems)
    }
  },
  methods: {
    createCurrentList(start = 0, end = this.showItems) {
      this.currentList = this.furnitureList.slice(start, end)
    },
    ceeperButtonsField() {
      if (this.currentList.length < this.furnitureList.length) {
        this.buttonsCounter = Math.floor(this.furnitureList.length / this.showItems)
        if (this.furnitureList.length % this.currentList.length != 0) {
          this.buttonsCounter = +this.buttonsCounter + 1
        }
      } else {
        this.buttonsCounter = 1;
      }
    },
    changePageNumber() {
      let btnContent = event.target.textContent.toLowerCase()
      if (btnContent == 'next' && this.currentPage < this.buttonsCounter) {
        this.currentPage = +this.currentPage + 1
      } else if (btnContent !== 'next') {
        this.currentPage = +btnContent
      }
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
  width: 100%;
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
