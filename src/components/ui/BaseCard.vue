<template>
  <div class="furniture-card" @mouseenter="hover = true" :class='mode'>
    <img :src="img" alt="" :class="mode" />
    <div class="furniture-card_texts">
      <h3 class="texts__label">{{ name }}</h3>
      <p class="texts__descr">{{ description }}</p>
      <h4 class="texts__price">Rp {{ price }}</h4>
    </div>
    <div class="furniture-card_popup" @mouseleave="hover = false" v-if="hover" :id='id' @click="routeToCart(id)">
      <base-button class="btn" @click.stop="addItemToCart(id)">Add to cart</base-button>
      <div class="popup-content">
        <div class="popup-content_box" @click.stop="shareItem(id)">
          <img src="/assets/icons/furnitureCards/icon-share.svg" alt="share icon." class="popup-icon" />
          <h5>Share</h5>
        </div>
        <!-- <div class="popup-content_box">
          <img src="/assets/icons/furnitureCards/icon-compare.svg" alt="compare icon." class="popup-icon" />
          <h5>Compare</h5>
        </div> -->
        <div class="popup-content_box" @click.stop="toggleLikeItem(id)">
          <!-- <img src="/assets/icons/furnitureCards/icon-like.svg" alt="like icon." class="popup-icon" /> -->
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
              stroke="white" stroke-width="1.8" />
          </svg>
          <h5>Like</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//TODO: сделать наведение на карточку
//TODO: сделать проверку если есть наводка на одну карточку, то все остальные должны быть открыты.
export default {
  props: ['name', 'price', 'img', 'description', 'id', 'mode'],
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    addItemToCart(id) {
      this.$store.commit('home/editCartItems', { id: id, action: "add" })
    },
    toggleLikeItem(id) {
      // event.target.classList.add('red-svg')
      this.$store.commit('home/toggleFavoriteList', id)
    },
    shareItem(id) {
      console.log('share', id)
    },
    routeToCart(id) {
      this.$router.push(`/card-info/${id}`);
    }
  },

};
</script>
<style scoped>
/* .red-svg {
  fill: red;
} */

.furniture-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 28.5rem;
  color: #000;
  height: 44.5rem;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
  background-color: #f4f5f7;
  cursor: pointer;
  position: relative;
  box-shadow: 2px 5px 10px 1px rgba(143, 135, 143, 1);
}

/* .furniture-card:hover {
  background-color: black;
} */
.furniture-card_popup {
  background-color: #3a3a3a;
  z-index: 2;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
}

.btn {
  width: 20.2rem;
  height: 4.8rem;
  border-radius: 0;
  background-color: #ffffff;
  color: #b88e2f;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border: none;
  transition: all ease-in 0.2s;
}

.btn:hover {
  background-color: #b88e2f;
  color: #fff;
}

img {
  width: 100%;
}

/* .add-width {
  width: 100%;
  max-width: 28.5rem;
} */

.furniture-card_texts {
  padding: 1.6rem 1.6rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.texts__label {
  color: #3a3a3a;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.texts__descr {
  color: #898989;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

.texts__price {
  color: #3a3a3a;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}

.popup-icon {
  width: 1.6rem;
  height: 1.6rem;
}

.popup-content_box:hover {
  transform: translateY(-3px);
}

h5 {
  color: #fff;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  /* 2.4rem */
}

.popup-content {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  /* align-items: center; */
}

.popup-content_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  transition: transform ease-in 0.2s;
}

@media(max-width: 1220px) {
  .furniture-card {
    width: 23%;
    max-width: 28.5rem;
    height: auto;
  }

  .furniture-card_texts {
    gap: 1rem;
    padding: 2rem 1rem;
  }

  .btn {
    max-width: 80%;
  }
}

@media(max-width: 1000px) {
  .furniture-card_texts {
    padding: 1.5rem 1rem;
    gap: .8rem;
  }
}

@media(max-width: 900px) {

  .furniture-card {
    width: 23.5%;
    max-width: 28.5rem;
  }

  .texts__label {
    font-size: 2rem;
  }

  .texts__descr {
    font-size: 1.4rem;
  }

  .texts__price {
    font-size: 1.6rem;
  }
}

@media(max-width: 720px) {
  .furniture-card {
    width: 45%;
  }

  .texts__label {
    font-size: 2.4rem;
  }

  .texts__descr {
    font-size: 1.9rem;
  }

  .texts__price {
    font-size: 1.8rem;
  }

  .furniture-card_texts {
    align-items: center
  }
}

@media(max-width: 620px) {

  .furniture-card_texts {
    padding: 1rem .5rem 1.2rem;
    gap: .8rem;
  }

  .btn {
    max-width: 90%;
  }
}

@media(max-width: 450px) {
  .furniture-card {
    width: 80%;
  }

  .texts__label {
    font-size: 2.4rem;
  }

  .texts__descr {
    font-size: 1.7rem;
  }

  .texts__price {
    font-size: 1.8rem;
  }
}
</style>
