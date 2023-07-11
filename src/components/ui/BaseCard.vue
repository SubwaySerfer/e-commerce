<template>
  <div class="card">
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

    >
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <h4>{{ price }}</h4>
  </div>
</template>

<script>
export default {
  props: ["name", "price", "img", "description"],
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  /* max-width: 48rem; */
  width: 28.5rem;
  color: #000;
  height: 45.9rem;
}
</style>
