<template>
  <div class="card-buttons">
    <!-- <base-button
      linkName="1"
      class="card-buttons__btn card-buttons__btn_counter"
    ></base-button> -->
    <div class="card-buttons__btn_counter">
      <button class="counter__item btn btn__minus">-</button
      ><input type="numeric" class="counter__input" value="1" /><button
        class="counter__item btn btn__plus"
      >
        +
      </button>
    </div>
    <base-button
      linkName="Add To Cart"
      class="card-buttons__btn btn"
    ></base-button>
    <base-button
      linkName="+ Compare"
      class="card-buttons__btn btn"
    ></base-button>
  </div>
</template>

<style scoped>
.card-buttons {
  margin-bottom: 6rem;
  padding-top: 2.1rem;
  display: flex;
  flex-direction: row;
}
.card-buttons__btn {
  width: 21.5rem;
  height: 6.4rem;
  border-radius: 1.5rem;
  border: 1px solid #000;
  background: transparent;

  margin-right: 1rem;
}
.btn {
  color: #000;
  font-family: Poppins;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.counter__item:hover {
  border: none;
}
.counter__item:active,
.counter__item:focus {
  outline: none;
  border: none;
}
.card-buttons__btn_counter {
  width: 12.3rem;
  height: 6.4rem;
  border-radius: 1rem;
  border: 1px solid #9f9f9f;
  background: #fff;
  margin-right: 1.8rem;
  display: flex;
  padding: 2rem 1.5rem;
  position: relative;
}
.btn__minus {
  top: 1.6rem;
  left: 1.2rem;
}
.btn__plus {
  top: 1.6rem;
  right: 0.9rem;
}
.counter__item {
  background: transparent;
  padding: 0;

  display: flex;
  align-items: center;
  position: absolute;
}
.counter__input {
  border: none;
  width: 100%;
  margin: 0 2rem;
  text-align: center;
}
.counter__input:focus {
  border: transparent;
}
</style>
