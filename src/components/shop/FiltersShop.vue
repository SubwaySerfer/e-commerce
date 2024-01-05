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
      <h6 v-if="windowWidth > 1020">Showing 1–16 of 32 results</h6>
    </div>
    <div class="filters-box-sec">
      <label for="">Show</label>
      <input type="number" placeholder="16" class="show-input" />
      <label for="" v-if="windowWidth > 620">Short by</label>
      <input v-if="windowWidth > 620" type="text" placeholder="Default" class="short-input" />
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
  margin-right: 1.2rem;
}

.short-input {
  width: 18.8rem;
  height: 5.5rem;
  padding-left: 3rem;
}

@media(max-width: 1200px) {
  .filter-wrapper {
    padding: 3.5vw;
  }
}

@media(max-width: 620px) {
  .filter-wrapper {
    justify-content: center;
    gap: 3rem;
  }
}
</style>
