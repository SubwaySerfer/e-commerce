<template>
  <footer class="footer">
    <div class="footer__main-block">
      <div class="contact-info">
        <h4 class="contact-info__label">Funiro.</h4>
        <p class="contact-info__adress">
          400 University Drive Suite 200 Coral Gables,<br />
          FL 33134 USA
        </p>
      </div>
      <div class="footer-nav">
        <ul class="footer-nav-items footer-ul__first">
          <li>
            <h6 class="list__label">Links</h6>
          </li>
          <li class="btn-root_vertical"><a href="/">Home</a></li>
          <li class="btn-root_vertical"><a href="/shop">Shop</a></li>
          <li class="btn-root_vertical"><a href="/blog">Blog</a></li>
          <li class="btn-root_vertical"><a href="/contact">Contact</a></li>
        </ul>
        <ul class="footer-nav-items footer-ul__sec">
          <li>
            <h6 class="list__label">Help</h6>
          </li>
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
    <div class="footer__rights-block">
      <p class="rights-info">2023 furino. All rights reverved</p>
    </div>
  </footer>
</template>

<style scoped>
.contact-info__label {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;
}

.footer {
  height: 50.5rem;
  padding: 4.7rem 10rem 3.8rem;
  border-top: 0.1rem solid #d9d9d9;
}

.footer__main-block {
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
  width: 100%;
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

.list__label,
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

.contact-info__adress {
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

.button-news:hover>.button-news_text:hover {
  transform: translateY(-2px);
}

@media (max-width: 1300px) {
  .footer__main-block {
    gap: 1rem;
    justify-content: space-between;
  }

  .footer {
    padding: 4.7rem 6.98vw 3.8rem;
  }

  .footer-nav {
    justify-content: space-evenly;
  }

  .footer-ul__first {
    margin-right: 0;
  }

  .footer-ul__sec {
    margin-right: 0;
  }
}

@media(max-width: 1000px) {
  .footer-nav {
    justify-content: space-between;
    gap: 1rem;
  }

  .footer {
    padding: 4.7rem 3vw 3.8rem;
  }
}

@media(max-width: 870px) {
  .footer__main-block {
    flex-direction: column;
    height: auto;
    align-items: center
  }

  .contact-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90vw;
    margin-bottom: 2rem;
  }

  .contact-info__adress {
    padding-top: 0;
  }

  .footer__rights-block {
    padding-bottom: 3rem;
  }

}

@media (max-width: 603px) {
  .input-box__content {
    flex-direction: column;
    align-items: center
  }

  .button-news {
    width: min-content;
  }
}

@media (max-width: 470px) {
  .footer-nav {
    flex-direction: column;
    align-items: center;
    width: 80vw;
    gap: 3rem;
  }

  .footer-nav-items {
    align-items: center
  }

  .input-box {
    align-items: center
  }

  .contact-info__adress {
    width: auto;
    text-align: end;
  }

  .contact-info {
    gap: .5rem;
  }
}

@media (min-width: 1300px) {
  .footer-nav {
    gap: 7.4rem;
  }

  .footer-nav-items {
    width: 14rem;
  }
}
</style>
