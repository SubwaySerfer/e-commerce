<template>
  <header>
    <div class="logo-box">
      <img
        src="../../assets/icons/mainLogo.png"
        alt="furniro logo"
        class="main-logo"
      />
      <h1>Furniro</h1>
    </div>
    <nav>
      <ul>
        <li class="btn-root"><router-link to="/">Home</router-link></li>
        <li class="btn-root"><router-link to="/shop">Shop</router-link></li>
        <li class="btn-root"><router-link to="/blog">Blog</router-link></li>
        <li class="btn-root">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <div class="icons-box">
      <ul class="icons-list">
        <li class="btn-root">
          <a href=""><img src="../../assets/icons/account-icon.svg" /></a>
        </li>
        <li class="btn-root">
          <a href=""><img src="../../assets/icons/search-icon.svg" /></a>
        </li>
        <li class="btn-root">
          <a href=""><img src="../../assets/icons/heart-icon.svg" /></a>
        </li>
        <li class="btn-root">
          <a href=""><img src="../../assets/icons/basket-icon.svg" /></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 3.35rem 10rem 3.45rem 5.4rem;
  align-items: center;
}

.main-logo {
  width: 5rem;
  height: 3.2rem;
}
.logo-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  height: 4.1rem;
  padding-right: 26.6rem;
}
.icons-box {
  padding-left: 15.8rem;
}
h1 {
  color: #000;
  font-family: Montserrat;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}
ul {
  display: flex;
  flex-direction: row;
  gap: 7.5rem;
  margin: 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.icons-list {
  width: 24.7rem;
  gap: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0 0 5px;
}
</style>
