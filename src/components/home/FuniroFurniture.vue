<template>
  <section class="furniture-wrapper">
    <h4 class="furniture-wrapper__title-description">Share your setup with</h4>
    <h2 class="furniture-wrapper__title-label">#FuniroFurniture</h2>
    <img src="/assets/image/furniture/furniture-1.png" alt="" class="img-1" />
    <img src="/assets/image/furniture/furniture-3.png" alt="" class="img-3" />
    <img src="/assets/image/furniture/furniture-2.png" alt="" class="img-2" />
    <img src="/assets/image/furniture/furniture-4.png" alt="" class="img-4" />
    <img src="/assets/image/furniture/furniture-5.png" alt="" class="img-5" />
    <img src="/assets/image/furniture/furniture-6.png" alt="" class="img-6" />
    <img src="/assets/image/furniture/furniture-8.png" alt="" class="img-8" />
    <img src="/assets/image/furniture/furniture-7.png" alt="" class="img-7" />
    <img src="/assets/image/furniture/furniture-9.png" alt="" class="img-9" />
  </section>
</template>

<style scoped>
.furniture-wrapper {
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

.furniture-wrapper__title-description {
  grid-area: 1 / 5 / 2 / 9;
  color: #616161;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  padding-right: 3.4rem;
}

.furniture-wrapper__title-label {
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

@media(max-width: 1439px) {
  .img-1 {
    width: 5.41vw;
  }

  .img-2 {
    width: 33.95vw;
  }

  .img-3 {
    width: 12.84vw;
  }

  .img-4 {
    width: 25.62vw;
  }

  .img-5 {
    width: 20.48vw;
  }

  .img-6 {
    width: 20.69vw;
  }

  .img-7 {
    width: 12.36vw;
  }

  .img-8 {
    width: 18.19vw;
  }

  .img-9 {
    width: 18.68vw;
  }

}

/* @media (max-width: 1350px) {
  .img-1 {
    align-self: center
  }
} */

@media (max-width: 1200px) {

  .img-9 {
    grid-area: 7 / 10 / 10 / 13;
    align-self: end
  }

  .img-8 {
    grid-area: 1 / 10 / 7 / 13;
    align-self: end
  }

  .img-3 {
    padding-top: 3rem;
  }

  .furniture-wrapper {
    height: auto;
  }

  .furniture-wrapper__title-label {
    grid-area: 1 / 1 / 3 / 13;
    align-self: center;
  }

  .furniture-wrapper__title-description {
    grid-area: 1 / 1 / 2 / 13;
    align-self: center;
  }
}

@media (max-width: 770px) {
  .furniture-wrapper {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    padding-top: 0;
  }

  .furniture-wrapper__title-description {
    grid-area: 2 / 1 / 3 / 4;
  }

  .furniture-wrapper__title-label {
    grid-area: 1 / 1 / 3 / 4;
  }

  .img-1 {
    grid-area: 3 / 1 / 4 / 2;
  }

  .img-2 {
    grid-area: 3 / 1 / 4 / 3;
    align-self: end;
    justify-content: center;
  }

  .img-8 {
    grid-area: 3 / 3 / 4 / 4;
  }

  .img-3 {
    grid-area: 4 / 1 / 5 / 2;
  }

  .img-4 {
    grid-area: 4 / 2 / 5 / 3;
    align-self: center
  }

  .img-7 {
    grid-area: 4 / 3 / 5 / 4;
    align-self: center
  }

  .img-5 {
    grid-area: 5 / 1 / 6 / 2;
  }

  .img-6 {
    grid-area: 5 / 2 / 6 / 3;
  }

  .img-9 {
    grid-area: 5 / 3 / 6 / 4;
    align-self: center;
    justify-self: center
  }
}

@media(max-width: 450px) {
  .furniture-wrapper__title-label {
    padding-right: 0;
    font-size: 3.3rem;
  }

  .furniture-wrapper__title-description {
    padding-right: 0;
  }
}
</style>
