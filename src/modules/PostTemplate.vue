<template>
  <div>
    <img />
    <div></div>
    <h2>post card</h2>
    <p></p>
    <button class="post-button">Read more</button>
  </div>
</template>

<style scoped>
.post-button {
  color: #000;
  background-color: transparent;
  text-align: justify;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.post-button:after {
  content: "";
  display: block;
  height: 1px; /* Высота линии */
  background: #000;
  width: 7.7rem;
  margin: 10px auto 0;
  transition: 1s;
}
</style>
