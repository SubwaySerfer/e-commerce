<template>
  <section class="comparison">
    <div class="comparison__promo">
      <div class="promo__more">
        <h2 class="more__title">Go to Product page for more Products</h2>
        <h5 class="more__btn">View More</h5>
      </div>

      <div class="comparison__photo-box">
        <div class="photo-box">
          <figure class="photo-box__background">
            <img src="/public/assets/image/comparison/Asgaard-sofa.png" alt="Asgaard sofa.">
          </figure>
          <h3 class="photo-box__label">Asgaard Sofa</h3>
          <h4 class="photo-box__price">Rs. 250,000.00</h4>
          <card-review></card-review>
          <!-- TODO: скорректировать звездочки и сделать вывод средней оценки + пропсы для данных о отзывах -->
        </div>
        <div class="photo-box">
          <figure class="photo-box__background">
            <img src="/public/assets/image/comparison/Outdoor-sofa.png" class="photo-box__background__up-img"
              alt="Outdoor sofa.">
          </figure>
          <h3 class="photo-box__label">Outdoor Sofa Set</h3>
          <h4 class="photo-box__price">Rs. 224,000.00</h4>
          <card-review></card-review>
        </div>
      </div>

      <div class="promo__product">
        <h3 class="product__title">Add A Product</h3>
        <select name="product" id="productSelet" class="product__select">
          <option value="">Choose a Product</option>
          <option value="Asgaard Sofa">Asgaard Sofa</option>
          <option value="Outdoor Sofa Set">Outdoor Sofa Set</option>
        </select>
      </div>
    </div>
    <div class="comparising__main">

      <h4 class="items__title__general items__title">General</h4>
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
          <p class="third_tb">Test</p>
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

      <h4 class="items__title items__title__product">Product</h4>
      <ul class="main__items-box main__items-box__product">
        <li class="items-box__li">
          <h6>Filling Material</h6>
          <p class="second_tb">test</p>
          <p class="third_tb">test3</p>
        </li>
        <li class="items-box__li">
          <h6>Finish Type</h6>
          <p class="second_tb"></p>
          <p class="third_tb"></p>
        </li>
        <li class="items-box__li">
          <h6>Adjustable Headrest</h6>
          <p class="second_tb"></p>
          <p class="third_tb"></p>
        </li>
        <li class="items-box__li">
          <h6>Maximum Load Capacity</h6>
          <p class="second_tb"></p>
          <p class="third_tb">TODO!</p>
        </li>
        <li class="items-box__li">
          <h6>Origin of Manufacture</h6>
          <p class="second_tb"></p>
          <p class="third_tb">Text</p>
        </li>
      </ul>

      <h4 class="items__title items__title__dimenseion">Dimensions</h4>
      <ul class="main__items-box main__items-box__dimenseion">
        <li class="items-box__li">
          <h6>Width</h6>
          <p class="second_tb">test</p>
          <p class="third_tb">test3</p>
        </li>
        <li class="items-box__li">
          <h6>Height</h6>
          <p class="second_tb"></p>
          <p class="third_tb"></p>
        </li>
        <li class="items-box__li">
          <h6>Depth</h6>
          <p class="second_tb"></p>
          <p class="third_tb"></p>
        </li>
        <li class="items-box__li">
          <h6>Weight</h6>
          <p class="second_tb"></p>
          <p class="third_tb">test</p>
        </li>
        <li class="items-box__li">
          <h6>Seat Height</h6>
          <p class="second_tb"></p>
          <p class="third_tb">Test Test</p>
        </li>
        <li class="items-box__li">
          <h6>Leg Height</h6>
          <p class="second_tb"></p>
          <p class="third_tb">Test Test</p>
        </li>
      </ul>

      <h4 class="items__title items__title__warranty">Warranty</h4>
      <ul class="main__items-box main__items-box__warranty">
        <li class="items-box__li">
          <h6>Warranty Summary</h6>
          <p class="second_tb">1 Year Manufacturing Warranty</p>
          <p class="third_tb">1.2 Year Manufacturing Warranty</p>
        </li>
        <li class="items-box__li">
          <h6>Warranty Service
            Type</h6>
          <p class="second_tb">For Warranty Claims or Any Product Related Issues Please Email at
            operations@
            trevifurniture.com</p>
          <p class="third_tb">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
        </li>
        <li class="items-box__li">
          <h6>Covered in Warranty</h6>
          <p class="second_tb">Warranty Against Manufacturing Defect</p>
          <p class="third_tb">Warranty of the product is limited to manufacturing defects only.</p>
        </li>
        <li class="items-box__li">
          <h6>Not Covered in Warranty</h6>
          <p class="second_tb">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And
            Wear & Tear In The Natural Course Of Product Usage.</p>
          <p class="third_tb">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And
            Wear & Tear In The Natural Course Of Product Usage.</p>
        </li>
        <li class="items-box__li">
          <h6>Domestic Warranty</h6>
          <p class="second_tb">1 Year</p>
          <p class="third_tb">3 Months</p>
        </li>
        <li class="items-box__li items-box__li__last">
          <base-button linkName="Add To Cart" class="second_tb__btn" mode="yellow-btn"></base-button>
          <base-button class="third_tb__btn" linkName="Add To Cart" mode="yellow-btn"></base-button>
        </li>

      </ul>
      <span class="line_1 line"></span>
      <span class="line_2 line"></span>
      <span class="line_3 line"></span>
    </div>
  </section>
</template>

<script>
import CardReview from '../cardInfo/CardReview.vue';

export default {
  components: { CardReview }
}
</script>

<style scoped>
ul {
  margin: 0;
}

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

.comparison__photo-box {
  display: flex;
  flex-direction: row;
  gap: 4.7rem;
  align-items: start
}


.photo-box {
  display: flex;
  flex-direction: column;
  width: 28rem;
}

.photo-box__background {
  border-radius: 1rem;
  background: #F9F1E7;
  width: 28rem;
  height: 17.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-bottom: 1.8rem;
}

.photo-box__background__up-img {
  transform: translateY(-17px);
}

.photo-box__label {
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 126.5%;
  text-align: start;
  margin-bottom: .6rem;
  padding-left: .2rem;
}

.photo-box__price {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
  text-align: start;
  padding-left: .2rem;
}

.product__title {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 126.5%;
  text-align: start;
  margin-bottom: 1.2rem;
}

.promo__product {
  padding-right: 7.1rem;
  padding-top: 4.7rem;
}

.product__select {
  width: 24.2rem;
  height: 3.9rem;
  background-color: #B88E2F;
  border-radius: .6rem;
  color: #FFF;
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 126.5%;
  padding: .6rem 0 0.7rem 1.3rem;
  /*TODO: Сделать кастомный селектор */
}

.comparising__main {
  border-top: 1px solid #e8e8e8;
  display: grid;
  width: 100%;
  grid-template-rows: 3rem 1fr 3rem min-content 3rem min-content 3rem min-content;
  grid-template-columns: 259px 1px 344px 1px 344px 1px 1fr;
  color: #000;
  font-family: Poppins;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 126.5%;
  padding: 4.2rem;
}

.items__title {
  text-align: start;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 126.5%;
}

.items__title__general {
  grid-area: 1 / 1 / 2 / 2;

}

.items__title__product {
  grid-area: 3 / 1 / 4 / 2;
}

.items__title__dimenseion {
  grid-area: 5 / 1 / 6 / 2;
}

.items__title__warranty {
  grid-area: 7 / 1 / 8 / 2;
}


.main__items-box {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 3.4rem;
  padding-top: 3.4rem;
  margin-bottom: 9.3rem;
}

.promo__more {
  padding: 20px 0 0 42px;
}

.main__items-box__general {
  grid-area: 2 / 1 / 2 / 6;
}

.main__items-box__product {
  grid-area: 4/ 1 / 5 / 6;
  margin-bottom: 9.4rem;
}

.main__items-box__dimenseion {
  grid-area: 6 / 1 / 7 / 6;
}

.main__items-box__warranty {
  grid-area: 8 / 1 / 9 / 6;
}

.items-box__li>h6 {
  text-align: start;
  font-size: 2rem;
  font-weight: 400;
  line-height: 126.5%;
  text-wrap: wrap;
  width: 259px;
  padding-right: 16px;
}

.items-box__li {
  display: grid;
  grid-template-columns: 259px 345px 345px;
  width: 100%;
  text-align: start;
}

.second_tb {
  grid-column: 2 / 3;
  padding-left: 6.2rem;
  padding-right: 4.1rem;
}

.second_tb__btn {
  grid-column: 2 / 3;
  justify-self: center;
}

.third_tb {
  grid-column: 3 / 4;
  padding-left: 6.2rem;
  padding-right: 4.1rem;
}

.third_tb__btn {
  grid-column: 3 / 4;
  justify-self: center;
}

.line {
  background: #E8E8E8;
  width: 1px;
  height: 100%;
}

.items-box__li__last {
  padding-top: 2.6rem;
}

.line_1 {
  grid-area: 1 / 2 / -1 / 3;
}

.line_2 {
  grid-area: 1 / 4 / -1 / 5;

}

.line_3 {
  grid-area: 1 / 6 / -1 / 7;

}
</style>
