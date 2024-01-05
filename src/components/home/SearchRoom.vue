<template>
  <section class="search-room">
    <div class="search-room__info-block">
      <h2 class="search-room__label">50+ Beautiful rooms inspiration</h2>
      <p class="search-room__description">
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </p>
      <base-button class="btn">Explore More</base-button>
    </div>

    <div class="search-room__img-block">
      <div class="img-block__slider">
        <img class="slider__main-img" src="/assets/image/search/BedRoom-search.png"
          alt="BedRoom, wall with 5 pictures and mattress with three pillows." />
        <div class="slider__text-content">
          <div class="img-info-box__label">
            <h6 class="text-content__room-label">01</h6>
            <span class="img-info-line"></span>
            <h6 class="text-content__room-label">Bed Room</h6>
          </div>
          <h3 class="text-content__description">Inner Peace</h3>
        </div>
        <div class="info-arrow">
          <img src="/assets/icons/home/arrow-search.svg" alt="arrow icon" class="info-icon__itm" />
        </div>
      </div>

      <div class="img-block__other-block">
        <div class="other-block__slider-images">
          <img src="/assets/image/search/SecRoom.png" class="slider-images__second-room"
            alt="light room with wood desk and two wood armchairs." />
        </div>
        <div class="slider-box">
          <img src="/assets/icons/home/active-room-search.svg" alt="" class="slider-icon slider-icon_active" />
          <img src="/assets/icons/home/basic-room-search.svg" alt="" class="slider-icon" />
          <img src="/assets/icons/home/basic-room-search.svg" alt="" class="slider-icon" />
          <img src="/assets/icons/home/basic-room-search.svg" alt="" class="slider-icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.search-room {
  height: 67rem;
  padding: 4.4rem 0 4.4rem 10rem;
  background-color: #fcf8f3;
  display: flex;
  flex-direction: row;
  gap: 4.2rem;
}

.search-room__info-block {
  padding-top: 17.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 29.3vw;
}

.search-room__img-block {
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
}

.search-room__label {
  color: #3a3a3a;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 0.7rem;
  text-align: start;
}

.text-content__description {
  color: #3a3a3a;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.text-content__room-label {
  color: #616161;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

.search-room__description {
  color: #616161;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 2.5rem;
  text-align: start;
}

.btn {
  color: #fff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  width: 17.6rem;
  height: 4.8rem;
  border-radius: 0;
  transition: all ease-in 0.2s;
  background-color: #B88E2F;
}

.btn:hover {
  background-color: #fff;
  color: #b88e2f;
  transform: scale(1.1);
}

.img-block__slider {
  position: relative;
}

.slider__text-content {
  position: absolute;
  left: 2.4rem;
  bottom: 2.4rem;
  width: 21.7rem;
  height: 13rem;
  padding: 3.2rem 1.7rem 3.2rem 3.2rem;
  background-color: rgba(255, 255, 255, 0.72);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-arrow {
  background-color: #b88e2f;
  width: 4.8rem;
  height: 4.8rem;
  position: absolute;
  bottom: 2.4rem;
  left: 24.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease-in 0.25s;
}

.info-arrow:hover>.info-icon__itm {
  transform: scale(1.1);
}

.info-arrow:hover {
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.69);
}

.info-icon__itm {
  width: 2.4rem;
  transition: all ease-in-out 0.2s;
}

.img-info-line {
  width: 2.7rem;
  height: 0.1rem;
  background-color: #616161;
}

.img-info-box__label {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 14.2rem;
  align-items: center;
}

.slider-box {
  width: 12rem;
  height: 2.7rem;
  gap: 2rem;
  display: flex;
  flex-direction: row;
}

.slider-icon {
  width: 11px;
  cursor: pointer;
}

.slider-icon_active {
  width: 27px;
}

.img-block__other-block {
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
}

@media (max-width: 1250px) {
  .search-room {
    padding-left: 3vw;
  }

  .search-room__info-block {
    padding-top: 8rem;
  }
}

@media (max-width: 770px) {
  .search-room__label {
    /* font-size: 3.5rem;
    line-height: 4rem; */
    text-align: center;
  }

  .search-room__description {
    text-align: center;
    font-size: 1.8rem;
  }

  .search-room__info-block {
    gap: 1rem;
    width: 80vw;
    align-items: center
  }

  .search-room {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
  }

  .btn {
    width: 22rem;
  }

  .img-block__other-block {
    display: none;
  }

  .slider__main-img {
    width: 95vw;
  }
}

/* //TODO: Сделать другой слайдер при уменьшении экрана */
</style>
