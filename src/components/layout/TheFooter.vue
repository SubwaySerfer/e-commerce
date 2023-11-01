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
        <ul class="footer-nav-items footer-ul_first">
          <li><h6>Links</h6></li>
          <li class="btn-root_vertical"><a href="/">Home</a></li>
          <li class="btn-root_vertical"><a href="/shop">Shop</a></li>
          <li class="btn-root_vertical"><a href="/blog">Blog</a></li>
          <li class="btn-root_vertical"><a href="/contact">Contact</a></li>
        </ul>
        <ul class="footer-nav-items footer-ul_sec">
          <li><h6>Help</h6></li>
          <li class="btn-root_vertical"><a href="">Payment Options</a></li>
          <li class="btn-root_vertical"><a href="">Returns</a></li>
          <li class="btn-root_vertical"><a href="">Privacy Policies</a></li>
        </ul>
        <div class="input-box">
          <h6 class="input-box_label">Newsletter</h6>
          <div class="input-box__content">
            <input type="text" placeholder="Enter Your Email Address" />
            <button class="button-news">
              <span class="button-news_text">SUBSCRIBE</span>
            </button>
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
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;
}
section {
  height: 50.5rem;
  padding: 4.7rem 10rem 3.8rem;
  border-top: 0.1rem solid #d9d9d9;
}
.footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 13.9rem;
  padding-bottom: 4.8rem;
}
.footer-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* gap: 14.6rem; */
  width: 100%;
  /* padding-left: 1px; */
}
.footer-nav-items {
  display: flex;
  flex-direction: column;
  gap: 4.6rem;
}
.footer-ul_first {
  margin-right: 14.6rem;
}
.footer-ul_sec {
  margin-right: 7.2rem;
}
a {
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: block;
  text-align: start;
  text-decoration: none;
}
h6,
.input-box_label {
  color: #9f9f9f;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: start;
  margin: 0;
  margin-bottom: 0.9rem;
}
.adress-info {
  color: #9f9f9f;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  width: 28.5rem;
  padding-top: 5rem;
  padding-left: 0.2rem;
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
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  margin: 0;
  border-top: 0.1rem solid #d9d9d9;
  padding-top: 3.4rem;
  padding-left: 0.2rem;
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
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 0.3rem;
  letter-spacing: 0.03em;
}
.button-news {
  background-color: transparent;
  border: 0;
  border-bottom: 0.1rem solid #000000;
  border-radius: 0;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 0 0.3rem 0;
}
.button-news_text {
  transition: all ease-in 0.25s;
  display: block;
}
.button-news:hover > .button-news_text:hover {
  transform: translateY(-2px);
}
</style>
