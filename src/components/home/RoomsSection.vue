<template>
  <section>
    <h2>Browse The Range</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div class="room-cards">
      <div class="room-card">
        <img src="/assets/image/home/room-dining.png" alt="dining room" class="room-card__img" />
        <h3>Dining</h3>
      </div>
      <div class="room-card">
        <img src="/assets/image/home/room-living.png" alt="living room" class="room-card__img" />
        <h3>Living</h3>
      </div>
      <div class="room-card">
        <img src="/assets/image/home/room-bedroom.png" alt="bedroom" class="room-card__img" />
        <h3>Bedroom</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  /* height: 72rem; */
  height: auto;
  padding: 5.2rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

h2 {
  color: #333;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-right: 5.5rem;
}

p {
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
}

.room-card__img {
  border-radius: 15px;
}

h3 {
  color: #333;
  text-align: center;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2.6rem;
}
</style>
