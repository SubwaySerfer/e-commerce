<template>
  <section class="comparison">
    <div class="comparison__promo">
      <div class="promo__more">
        <h2 class="more__title">Go to Product page for more Products</h2>
        <h5 class="more__btn">View More</h5>
      </div>

      <div>
        <h3 class="promo__product">Add A Product</h3>
        <select name="product" id="productSelet">
          <option value="">Choose a Product</option>
          <option value="Asgaard Sofa">Asgaard Sofa</option>
          <option value="Outdoor Sofa Set">Outdoor Sofa Set</option>
        </select>
      </div>
    </div>
    <div class="comparising__main">
      <h4 class="main__title__general">General</h4>
      <ul class="main__items-box main__items-box__general">
        <li class="items-box__li">
          <h6>Sales Package</h6>
          <p class="second_tb">test</p>
          <p class="third_tb">test3</p>
        </li>
        <li class="items-box__li">
          <h6>Model Number</h6>
          <p class="second_tb"></p>
          <p class="third_tb"></p>
        </li>
        <li class="items-box__li">
          <h6>Secondary Material</h6>
          <p class="second_tb"></p>
          <p class="third_tb"></p>
        </li>
        <li class="items-box__li">
          <h6>Configuration</h6>
          <p class="second_tb"></p>
          <p class="third_tb">yyy</p>
        </li>
        <li class="items-box__li">
          <h6>Upholstery Material</h6>
          <p class="second_tb"></p>
          <p class="third_tb"></p>
        </li>
        <li class="items-box__li">
          <h6>Upholstery Color</h6>
          <p class="second_tb"></p>
          <p class="third_tb"></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.comparison {
  width: 100%;
  padding: 0 5.4rem;
}

.comparison__promo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 38.6rem;
  padding-top: 3.4rem;
}

.more__title {
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 126.5%;
  width: 22.3rem;
  text-align: start;
  margin-bottom: 2.1rem;
}

.more__btn {
  color: #727272;
  font-size: 2rem;
  font-weight: 500;
  line-height: normal;
  width: 11.5rem;
  border-bottom: 2px solid #727272;
  text-align: start;
}

.promo__product {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 126.5%;
  padding-right: 7.1rem;
}

.comparising__main {
  border-top: 1px solid #e8e8e8;
  display: grid;
  width: 100%;
  grid-template-rows: 3rem 1fr 3rem 1fr 3rem 2fr;
  grid-template-columns: repeat(4, 1fr);
  color: #000;
  font-family: Poppins;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 126.5%;
  padding-top: 4.2rem;
}

.main__title__general {
  grid-area: 1 / 1 / 2 / 2;
  text-align: start;
}

.main__items-box {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 3.4rem;
}

.promo__more {
  padding: 20px 0 0 42px;
}

.main__items-box__general {
  grid-area: 2 / 1 / 2 / 4;
}

.items-box__li>h6 {
  text-align: start;
}

.items-box__li {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}

.second_tb {
  grid-column: 2 / 3;
}

.third_tb {
  grid-column: 3 / 4;
}
</style>
