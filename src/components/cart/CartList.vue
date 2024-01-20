<template>
  <ul class="cart">
    <li class="cart__item" v-for="cartItem in CartList" :id=cartItem.id>
      <!-- { "id": 2, "name": "Leviosa", "discount": 0, "isNew": false, "price": 2500000, "img":
      "assets/image/products/Leviosa-product.png", "description": "Stylish cafe chair", "counter": 2 } -->

      <figure class="item__img-box">
        <img :src=cartItem.img :alt=cartItem.description class="img-box__img" />
      </figure>
      <h5 class="item__title">{{ cartItem.name }}</h5>
      <!-- <h5 class="item__price">Rs. {{ priceToString(cartItem.price) }}</h5> -->
      <input type="numeric" :value=cartItem.counter class="item__counter" />
      <h5 class="item__subtotal">Rs. {{ priceToString(cartItem.price) }}</h5>
      <button class="item__trash-btn" @click="delCartItem(cartItem.id)">
        <img src="/assets/icons/cart/trash-icon.svg" alt="garbage button." class="trash-btn__icon" />
      </button>
    </li>
    <!-- <li class="cart__item">
      <figure class="item__img-box">
        <img src="/assets/icons/cart/sofa-asgaard.png" alt="asgaard sofa." class="img-box__img" />
      </figure>
      <h5 class="item__title">Asgaard sofa</h5>
      <h5 class="item__price">Rs. 250,000.00</h5>
      <input type="numeric" value="1" class="item__counter" />
      <h5 class="item__subtotal">Rs. 250,000.00</h5>
      <button class="item__trash-btn">
        <img src="/assets/icons/cart/trash-icon.svg" alt="garbage button." class="trash-btn__icon" />
      </button>
    </li> -->
  </ul>
</template>

<script>
export default {
  computed: {
    CartList() {
      return this.$store.getters['home/getCartList']
    }
  },
  methods: {
    delCartItem(id) {
      this.$store.commit('home/editCartItems', { id: id, action: "del" })
    },
    priceToString(num) {
      return num.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    }
  }

}
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 2rem;
}

.cart__item {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.item__title,
.item__price {
  color: #9f9f9f;
  font-size: 1.6rem;
  font-family: Poppins;
  font-style: normal;
  line-height: normal;
  width: 10.5rem;
}

.item__img-box {
  width: 10.5rem;
  height: 10.5rem;
  border-radius: 1rem;
  background: #f9f1e7;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-box__img {
  width: 11.1rem;
  height: 9rem;
}

.item__counter {
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.5rem;
  border: 1px solid #9f9f9f;
  text-align: center;
}

.item__trash-btn {
  width: 2.8rem;
  height: 2.8rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item__subtotal {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 10.5rem;
}

@media(max-width: 650px) {
  .item__img-box {
    width: 6rem;
    height: 6rem;
    padding: .5rem;
  }

  .img-box__img {
    width: 100%;
    height: 100%;
  }
}

@media(max-width: 550px) {
  .item__title {
    /* width: auto; */
    width: 5rem;
    text-align: wrap;
    font-size: 1.2rem;
  }

  .item__price,
  .item__subtotal {
    font-size: 1.2rem;
  }
}

@media(max-width: 430px) {

  .item__price,
  .item__subtotal {
    width: 7rem;
    font-size: 1rem;
  }
}
</style>
