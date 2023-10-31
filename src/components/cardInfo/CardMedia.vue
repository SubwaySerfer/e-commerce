<template>
  <ul class="media-list">
    <li class="list__el">
      <span class="el__label">SKU</span>
      <div><span class="dots">:</span><span>SS001</span></div>
    </li>
    <li class="list__el">
      <span class="el__label">Category</span>
      <div><span class="dots">:</span><span>Sofas</span></div>
    </li>
    <li class="list__el">
      <span class="el__label">Tags</span>
      <div><span class="dots">:</span><span>Sofa, Chair, Home, Shop</span></div>
    </li>
    <li class="list__el">
      <span class="el__label">Share</span>
      <div><span class="dots">:</span><span>Media</span></div>
    </li>
  </ul>
</template>

<style scoped>
.media-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  color: #9f9f9f;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.list__el {
  display: flex;
  justify-content: flex-start;
  text-align: start;
  gap: 1.6rem;
}
.el__label {
  width: 7.5rem;
}
.dots {
  margin-right: 1.2rem;
}
</style>
