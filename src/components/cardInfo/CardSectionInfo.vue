<template>
  <div class="card-info">
    <h1 class="card-info__title">{{ name }}</h1>
    <h3 class="card-info__price">{{ price }}</h3>
    <card-review></card-review>
    <p class="card-info__description">{{ description }}</p>
    <h5 class="card-info__parameter">Size</h5>
    <ul class="card-info__list">
      <li class="list-sizes__size">
        <span class="size__el">L</span>
      </li>
      <li class="list-sizes__size">
        <span class="size__el">XL</span>
      </li>
      <li class="list-sizes__size">
        <span class="size__el">XS</span>
      </li>
    </ul>
    <h5 class="card-info__parameter card-info__parameter_color">Color</h5>
    <ul class="card-info__list">
      <li class="list-colors__color list-colors__color_purple"></li>
      <li class="list-colors__color list-colors__color_black"></li>
      <li class="list-colors__color list-colors__color_yellow"></li>
    </ul>
    <card-buttons></card-buttons>
    <span class="line"></span>
    <card-media></card-media>
  </div>
</template>
<script>
import CardMedia from "./CardMedia.vue";
import CardButtons from "./CardButtons.vue";
import CardReview from "./CardReview.vue";

export default {
  props: ["name", "price", "description"],
  components: {
    CardMedia,
    CardButtons,
    CardReview,
  },
};
</script>

<style scoped>
.card-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-style: normal;
  font-family: Poppins;
  color: #000;
  margin-left: 7.5rem;
}

.card-info__title {
  font-size: 4.2rem;
  font-weight: 400;
  line-height: normal;
}

.card-info__price {
  color: #9f9f9f;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: normal;
}

.card-info__description {
  font-size: 1.3rem;
  font-weight: 400;
  line-height: normal;
  width: 42.4rem;
  height: auto;
  text-align: start;
  margin-bottom: 2.2rem;
}

.card-info__parameter {
  color: #9f9f9f;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
}

.card-info__parameter_color {
  margin-top: 0.53rem;
}

.card-info__list {
  display: flex;
  gap: 1.6rem;
  margin: 1.2rem 0;
}

.list-sizes__size {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: #f9f1e7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-colors__color {
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  list-style-type: none;
}

.size__el {
  color: #000;
  font-family: Poppins;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.line {
  width: 60.5013rem;
  height: 0.1rem;
  background: #d9d9d9;
}

.list-colors__color_purple {
  background: #816dfa;
}

.list-colors__color_black {
  background: #000;
}

.list-colors__color_yellow {
  background: #b88e2f;
}

@media(max-width: 1400px) {
  .card-info {
    margin-left: 0;
  }

  .line {
    width: 100%;
  }
}

@media(max-width: 1200px) {
  .card-info {
    align-items: center
  }
}

@media(max-width: 540px) {

  .card-info__description {
    width: auto;
    text-align: center;
  }
}
</style>
