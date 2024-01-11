<template>
  <section class="filter-wrapper">
    <div class="filters-box-first">
      <ul>
        <li>
          <img src="/assets/icons/shop/filters-scroll.svg" alt="filter scroll icon" />
        </li>
        <li class="scroll-label">Filter</li>
        <li v-if="windowWidth > 740">
          <img src="/assets/icons/shop/filters-dots.svg" alt="filter dots" class="filter-dots" />
        </li>
        <li v-if="windowWidth > 740">
          <img src="/assets/icons/shop/filters-view.svg" alt="filter view" class="filter-view" />
        </li>
      </ul>
      <span class="cross-line"></span>
      <h6 v-if="windowWidth > 1020">Showing 1–{{ showItems }} of {{ furnListLength }} results</h6>
    </div>
    <div class="filters-box-sec">
      <label for="">Show</label>
      <input type="" readonly :value="showItems" class="show-input" />
      <div class="arrow-box">
        <img src="/assets/icons/ui/arrow-icon.svg" alt="arrow plus 4 step." class="arrow-box__plus" @click="editShow">
        <img src="/assets/icons/ui/arrow-icon.svg" alt="arrow minus 4 step." id="arrow-minus" @click="editShow">
      </div>
      <label for="" v-if="windowWidth > 640">Short by</label>
      <input v-if="windowWidth > 640" type="text" placeholder="Default" class="short-input" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    editShow() {
      if (event.target.id === 'arrow-minus') {
        this.$store.commit('home/editShowItems', 'minus')
      } else {
        this.$store.commit('home/editShowItems', 'plus')
      }
    }
  },
  computed: {
    showItems() {
      return this.$store.getters['home/getShowItems']
    },
    furnListLength() {
      return this.$store.getters['home/furnitureList'].length
    }
  }
}

</script>

<style scoped>
.filter-wrapper {
  height: 10rem;
  background-color: #f9f1e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem 0 9.8rem;
  width: 100%;
}

.filters-box-first {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
}

.cross-line {
  background-color: #9f9f9f;
  width: 0.2rem;
  height: 3.7rem;
}

.scroll-label {
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  padding-top: 3px;
}

.filter-dots {
  padding-left: 12px;
  padding-top: 3px;
}

.filter-view {
  padding-left: 12px;
}

h6 {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 2px;
}

.filters-box-sec {
  display: flex;
  gap: 1.7rem;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
}

input {
  color: #9f9f9f;
  font-size: 2rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
}

.show-input {
  width: 5.5rem;
  height: 5.5rem;
  background-color: #ffffff;
  display: block;
  text-align: center;
  cursor: default;
  outline: none;
  appearance: none
}

.short-input {
  width: 18.8rem;
  height: 5.5rem;
  padding-left: 3rem;
}

.arrow-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateX(-.3rem);
  margin-right: 1.5rem;
  align-items: center;
}

.arrow-box>img {
  cursor: pointer
}

/* TODO: сделать подсветку при клике */

.arrow-box__plus {
  transform: rotate(180deg);
}

@media(max-width: 1200px) {
  .filter-wrapper {
    padding: 3.5vw;
  }
}

@media(max-width: 770px) {
  .arrow-box {
    margin-right: 0;
  }
}

@media(max-width: 640px) {
  .filter-wrapper {
    justify-content: center;
    gap: 3rem;
  }

  .arrow-box {
    transform: translateX(0);

  }
}
</style>
