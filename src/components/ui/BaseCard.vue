<template>
  <div class="furniture-card" @mouseenter="hover = true">
    <!-- <slot>{{ (name, price, img) }} </slot> -->
    <!-- <slot name="img">
      <img src="" alt="" />
    </slot>
    <slot name="title"
      ><h3></h3>
      <p></p
    ></slot>
    <slot><h4></h4></slot> -->
    <img :src="img" alt="" />
    <div class="furniture-card_texts">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <h4>Rp {{ price }}</h4>
    </div>

    <div class="furniture-card_popup" @mouseleave="hover = false" v-if="hover" @click="this.$router.push('/card-info')">
      <base-button class="btn">Add to cart</base-button>
      <div class="popup-content">
        <div class="popup-content_box">
          <img src="/public/assets/icons/furnitureCards/icon-share.svg" alt="share icon." class="popup-icon" />
          <h5>Share</h5>
        </div>
        <div class="popup-content_box">
          <img src="/public/assets/icons/furnitureCards/icon-compare.svg" alt="compare icon." class="popup-icon" />
          <h5>Compare</h5>
        </div>
        <div class="popup-content_box">
          <img src="/public/assets/icons/furnitureCards/icon-like.svg" alt="like icon." class="popup-icon" />
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
  props: ['name', 'price', 'img', 'description'],
  data() {
    return {
      hover: false,
    };
  },
};
</script>
<style scoped>
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
  width: 28.5rem;
}

.furniture-card_texts {
  padding: 1.6rem 1.6rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

h3 {
  color: #3a3a3a;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

p {
  color: #898989;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

h4 {
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
</style>
