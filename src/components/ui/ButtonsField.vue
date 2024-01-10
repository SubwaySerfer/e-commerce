<template>
  <div class="slider">
    <div class="slider-item slider-active">1</div>
    <div class="slider-item">2</div>
    <div class="slider-item">3</div>
    <div class="next-item">Next</div>
  </div>
</template>

<!-- :class="{ 'disabled': buttonsCounter <= 1 }" -->

<script>
export default {
  props: ['buttonsCounter'],
  data() {
    return {
      currentPage: 1
    }
  },
  mounted() {
    this.buildButtons()
    this.nextButtonCeeper()
  },
  watch: {
    buttonsCounter(newVal) {
      this.buildButtons()
      this.nextButtonCeeper()
    }
  },
  methods: {
    buildButtons() {
      let sliderItems = document.querySelectorAll('.slider-item')
      if (this.currentPage <= this.buttonsCounter) {
        sliderItems.forEach(el => {
          el.textContent <= this.buttonsCounter ? el.classList.remove('disabled') : el.classList.add('disabled')
        })
      } else {
        this.currentPage = this.buildButtons
      }
    },
    nextButtonCeeper() {
      let nextItem = document.querySelector('.next-item')
      if (this.currentPage >= this.buttonsCounter) {
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
