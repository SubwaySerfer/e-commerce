<template>
  <section>
    <div class="footer">
      <div>
        <h4>Funiro.</h4>
        <p class="adress-info">
          400 University Drive Suite 200 Coral Gables,<br />
          FL 33134 USA
        </p>
      </div>
      <div class="footer-nav">
        <ul class="footer-nav-items">
          <li><h6>Links</h6></li>
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <ul class="footer-nav-items">
          <li><h6>Help</h6></li>
          <li><a href="">Payment Options</a></li>
          <li><a href="">Returns</a></li>
          <li><a href="">Privacy Policies</a></li>
        </ul>
        <div class="input-box">
          <h6 class="input-box_label">Newsletter</h6>
          <div class="input-box__content">
            <input type="text" placeholder="Enter Your Email Address" />
            <button class="button-news">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="rights-info">2023 furino. All rights reverved</p>
    </div>
  </section>
</template>

<style scoped>
h4 {
  /* color: #000; */
  /* font-family: Poppins; */
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
section {
  height: 50.5rem;
  padding: 4.8rem 10rem 3.8rem;
  border-top: 0.1rem solid #d9d9d9;
}
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 4.8rem;
}
.footer-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 7.2rem;
}
.footer-nav-items {
  display: flex;
  flex-direction: column;
  gap: 4.6rem;
}
a {
  /* color: #000; */
  /* font-family: Poppins; */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: block;
  text-align: start;
}
h6,
.input-box_label {
  color: #9f9f9f;
  /* font-family: Poppins; */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: start;
  margin: 0;
}
.adress-info {
  color: #9f9f9f;
  /* font-family: Poppins; */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  width: 28.5rem;
}
li {
  list-style-type: none;
  align-items: flex-start;
}
ul {
  margin: 0;
  padding: 0;
}
.rights-info {
  /* color: #000; */
  /* font-family: Poppins; */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  margin: 0;
  border-top: 0.1rem solid #d9d9d9;
  padding-top: 3.5rem;
}
.input-box {
  display: flex;
  flex-direction: column;
  gap: 4.6rem;
}
.input-box__content {
  gap: 1.1rem;
  display: flex;
  flex-direction: row;
}
input {
  border: none;
  border-bottom: 0.1rem solid #000;
  width: 20rem;
  color: #9f9f9f;
  /* font-family: Poppins; */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 0.3rem;
}
.button-news {
  background-color: transparent;
  border: 0;
  border-bottom: 0.1rem solid #000000;
  border-radius: 0;
  /* color: #000;
  font-family: Poppins; */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 0 0.3rem 0;
}
</style>
