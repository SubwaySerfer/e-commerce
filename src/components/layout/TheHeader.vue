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
        <li><a href="">Home</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
    <div>
      <ul class="icons-list">
        <li>
          <a href=""><img src="../../assets/icons/account-icon.svg" /></a>
        </li>
        <li>
          <a href=""><img src="../../assets/icons/search-icon.svg" /></a>
        </li>
        <li>
          <a href=""><img src="../../assets/icons/heart-icon.svg" /></a>
        </li>
        <li>
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
  justify-content: space-between;
  width: 100%;
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
  padding: 3rem 0;
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
  padding: 3.8rem 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #000;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

/* .icons-list {
  height: 20px;
} */
/* .account-icon {
  background-image: url(../../assets/icons/account-icon.svg);
  width: 20px;
  display: block;
} */
</style>
