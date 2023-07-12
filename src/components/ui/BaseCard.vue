<template>
  <div class="furniture-card">
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
  </div>
</template>

<script>
export default {
  props: ["name", "price", "img", "description"],
};
</script>
<style scoped>
.furniture-card {
  /* border-radius: 12px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  /* padding: 1rem; */
  /* margin: 2rem auto; */
  /* max-width: 48rem; */
  width: 28.5rem;
  color: #000;
  height: 44.5rem;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
  background-color: #f4f5f7;
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
</style>
