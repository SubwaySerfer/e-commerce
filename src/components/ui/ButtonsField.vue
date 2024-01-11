<template>
  <div class="slider">
    <div class="slider-item" @click="$emit('changePage')">1</div>
    <div class="slider-item" @click="$emit('changePage')">2</div>
    <div class="slider-item" @click="$emit('changePage')">3</div>
    <div class="next-item" @click="$emit('changePage')">Next</div>
  </div>
</template>

<!-- :class="{ 'disabled': buttonsCounter <= 1 }" -->
<!-- @click="$emit('changePage', 'argument')" -->
<script>
export default {
  props: ['buttonsCounter', 'curPage'],
  emits: ['changePage'],
  mounted() {
    this.buildButtons()
    this.nextButtonCeeper()
    this.changeActivePage()
  },
  watch: {
    buttonsCounter(newVal) {
      this.buildButtons()
      this.nextButtonCeeper()
    },
    curPage(newVal) {
      this.changeActivePage()
      this.nextButtonCeeper()
    }
  },
  methods: {
    buildButtons() {
      let sliderItems = document.querySelectorAll('.slider-item')
      if (this.curPage <= this.buttonsCounter) {
        sliderItems.forEach(el => {
          el.textContent <= this.buttonsCounter ? el.classList.remove('disabled') : el.classList.add('disabled')
        })
      } else {
        this.curPage = this.buildButtons
        // мб актив пейдж поменять надо
      }
    },
    changeActivePage() {
      let sliderItems = document.querySelectorAll('.slider-item')
      sliderItems.forEach(el => { el.textContent == this.curPage ? el.classList.add('slider-active') : el.classList.remove('slider-active') })
    },

    nextButtonCeeper() {
      let nextItem = document.querySelector('.next-item')
      if (this.curPage >= this.buttonsCounter) {
        nextItem.classList.add('disabled')
      } else {
        nextItem.classList.remove('disabled')
      }
    }
  }
}
</script>

<style scoped>
.slider {
  padding-top: 3rem;
  gap: 3.8rem;
  display: flex;
  flex-direction: row;
}


.slider-item,
.next-item {
  width: 6rem;
  height: 6rem;
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

.disabled {
  cursor: no-drop;
  background: #dadad9;
}

@media(max-width: 470px) {
  .slider {
    gap: 1rem;
  }
}
</style>
