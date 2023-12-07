<template>
  <section class="comparison">
    <div class="comparison__promo">
      <div class="promo__more">
        <h2 class="more__title">Go to Product page for more Products</h2>
        <h5 class="more__btn">View More</h5>
      </div>

      <div>
        <h3>Add A Product</h3>
        <select name="product" id="productSelet">
          <option value="">Choose a Product</option>
          <option value="Asgaard Sofa">Asgaard Sofa</option>
          <option value="Outdoor Sofa Set">Outdoor Sofa Set</option>
        </select>
      </div>
    </div>
  </section>
</template>

<style scoped>
.comparison {
  width: 100%;
  padding: 3.4rem;
}
.comparison__promo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
}
</style>
