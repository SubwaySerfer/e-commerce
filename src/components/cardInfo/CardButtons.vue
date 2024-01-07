<template>
  <div class="card-buttons">
    <!-- <base-button
      linkName="1"
      class="card-buttons__btn card-buttons__btn_counter"
    ></base-button> -->
    <div class="card-buttons__btn_counter">
      <button class="counter__item btn btn__minus" @click="removeToCounter()">-</button><input type="numeric"
        class="counter__input" :value="count" />
      <button class="counter__item btn btn__plus" @click="appendToCounter()">+</button>
    </div>
    <base-button linkName="Add To Cart" class="card-buttons__btn btn" @click="appendToCart(id)"></base-button>
    <base-button linkName="+ Compare" class="card-buttons__btn btn"></base-button>
  </div>
</template>

<script>
export default {
  props: ['counter', 'id'],
  data() {
    return {
      count: this.counter
    }
  },
  methods: {
    appendToCounter() {
      this.count++
    },
    removeToCounter() {
      if (this.count <= 0) {
        return this.count = 0
      } else {
        this.count--
      }
    },
    appendToCart(id) {
      if (this.count == 0) return
      this.$store.commit('home/editCartItems', { id: id, action: 'add', counter: this.count })
      // this.count = this.counter
      // TODO: Сделать добавление с определенным колличеством + описание товара
    }
  },
  computed: {
    cartList() {
      return this.$store.getters['home/getCartList']
    }
  }
  // watch: {
  //   counter(oldVal, counter) {
  //     console.log('alarm', oldVal, counter)
  //   }
  // при удаление из попапа должно меняться число в каунт

  // }
}
</script>

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
  right: 1.2rem;
}

.counter__item {
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  position: absolute;
  outline: none;
  border: none;
  font-weight: 600;
}

.counter__input {
  border: none;
  width: 100%;
  margin: 0 2rem;
  text-align: center;
  outline: none;
  font-size: 1.8rem;
  font-weight: 700;
}

@media(max-width: 1220px) {
  .card-buttons {
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .card-buttons__btn,
  .card-buttons__btn_counter {
    margin-right: 0;
  }

  .card-buttons__btn_counter {
    flex: 0 1 100%;
    margin: 0 auto;
  }
}

@media(max-width: 501px) {
  .card-buttons {
    flex-direction: column;
    width: 90vw;
    gap: 2rem;
  }

  .card-buttons__btn_counter {
    width: 50%;
  }

  .card-buttons__btn {
    width: 100%;
  }
}
</style>
