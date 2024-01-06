<template>
  <div class="slider">
    <div class="slider-item slider-active">1</div>
    <div class="slider-item">2</div>
    <div class="slider-item">3</div>
    <div class="slider-item next-item">Next</div>
  </div>
</template>

<style scoped>
.slider {
  padding-top: 3rem;
  gap: 3.8rem;
  display: flex;
  flex-direction: row;
}

.slider-item {
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

@media(max-width: 470px) {
  .slider {
    gap: 1rem;
  }
}
</style>
