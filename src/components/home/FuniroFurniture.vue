<template>
  <section>
    <h4 class="title-desc">Share your setup with</h4>
    <h2 class="title-label">#FuniroFurniture</h2>
    <img src="assets/image/furniture/furniture-1.png" alt="" class="img-1" />
    <img src="assets/image/furniture/furniture-3.png" alt="" class="img-3" />
    <img src="assets/image/furniture/furniture-2.png" alt="" class="img-2" />
    <img src="assets/image/furniture/furniture-4.png" alt="" class="img-4" />
    <img src="assets/image/furniture/furniture-5.png" alt="" class="img-5" />
    <img src="assets/image/furniture/furniture-6.png" alt="" class="img-6" />
    <img src="assets/image/furniture/furniture-8.png" alt="" class="img-8" />
    <img src="assets/image/furniture/furniture-7.png" alt="" class="img-7" />
    <img src="assets/image/furniture/furniture-9.png" alt="" class="img-9" />
  </section>
</template>

<style scoped>
section {
  height: 89.7rem;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(12, 1fr);
  padding-top: 6.7rem;
}
.img-1 {
  grid-area: 1 / 1 / 7 / 2;
  padding-top: 5.9rem;
}
.img-3 {
  grid-area: 6 / 1 /11 /3;
  align-self: end;
  padding-bottom: 5rem;
}
.img-2 {
  grid-area: 2 / 1 / 7 /6;
  align-self: center;
  justify-self: center;
  padding-left: 3.8rem;
  padding-bottom: 1.1rem;
}
.img-4 {
  grid-area: 6 / 2/ 11 /6;
  align-self: start;
  padding-top: 4.2rem;
  justify-self: center;
  padding-left: 2.5rem;
}
.img-5 {
  grid-area: 3 / 5 / 9 / 9;
  align-self: center;
  justify-self: center;
  padding-right: 2.3rem;
  padding-bottom: 0.8rem;
}
.img-6 {
  grid-area: 2 / 8 / 8 / 11;
  align-self: center;
  justify-self: center;
  padding-right: 0.8rem;
}
.img-8 {
  grid-area: 1 / 10 / 8 / 13;
  justify-self: end;
  align-self: center;
}
.img-7 {
  grid-area: 7 / 8 / 11 / 10;
  align-self: start;
  padding-top: 2.4rem;
  justify-self: center;
  /* padding-right: 0rem; */
}
.img-9 {
  grid-area: 7 / 9 / 10 / 13;
  justify-self: center;
  align-self: center;
  padding-right: 1.1rem;
  padding-bottom: 0.4rem;
}
.title-desc {
  grid-area: 1 / 5 / 2 / 9;
  color: #616161;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  padding-right: 3.4rem;
}
.title-label {
  grid-area: 1 / 5 / 2 / 9;
  align-self: end;
  justify-self: center;
  color: #3a3a3a;
  text-align: end;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  padding-right: 3.4rem;
  /* padding-bottom: -3rem; */
  transform: translateY(3px);
}
</style>
