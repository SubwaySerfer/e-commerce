<template>
  <section class="rooms-wrapper">
    <h2 class="rooms-wrapper__label">Browse The Range</h2>
    <p class="rooms-wrapper__description">Explore our curated range for your unique style.
    </p>
    <div class="room-cards">
      <div class="room-card">
        <img src="/assets/image/home/room-dining.png" alt="dining room" class="room-card__img" />
        <h3 class="room-cards__label">Dining</h3>
      </div>
      <div class="room-card">
        <img src="/assets/image/home/room-living.png" alt="living room" class="room-card__img" />
        <h3 class="room-cards__label">Living</h3>
      </div>
      <div class="room-card">
        <img src="/assets/image/home/room-bedroom.png" alt="bedroom" class="room-card__img" />
        <h3 class="room-cards__label">Bedroom</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rooms-wrapper {
  height: auto;
  padding: 5.2rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.rooms-wrapper__label {
  color: #333;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-right: 5.5rem;
}

.rooms-wrapper__description {
  color: #666;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 1.7rem;
  padding-bottom: 6rem;
}

.room-cards {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.room-card__img {
  border-radius: 15px;
}

.room-cards__label {
  color: #333;
  text-align: center;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2.6rem;
}

@media (max-width: 1440px) {
  .rooms-wrapper {
    padding: 5.2rem 6.9vw;

  }

  .room-cards {
    justify-content: space-around;
  }
}

@media (max-width: 750px) {
  .rooms-wrapper__label {
    text-align: center;
    padding-right: 0;
  }

  .rooms-wrapper__description {
    padding: 0 0 3rem;
  }

  .room-card__img {
    max-width: 80vw;
  }

}
</style>
