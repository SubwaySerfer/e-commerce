<template>
  <div class="popup">
    <div class="popup__header">
      <h2 class="header__label">Shopping Cart</h2>
      <img src='/assets/icons/ui/popup-cart.svg' alt="cart and exit button." class="header__icon">
    </div>
    <span class="line"></span>

    <div class="popup__content">
      main
    </div>
    <div class="popup__footer">
      footer
    </div>
  </div>
</template>

<style scoped>
.popup {
  width: 41.7rem;
  height: 74.6rem;
  background: #FFF;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000;
  font-family: Poppins;
  font-style: normal;
  line-height: normal;
}

.popup__header {

  height: 9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4rem 0 3rem;
  justify-content: space-between;
  width: 100%;
}

.header__label {
  font-size: 2.4rem;
  font-weight: 600;
}

.header__icon {
  width: 1.6625rem;
  height: 1.9rem;
}

.line {
  width: 28.7rem;
  height: 1px;
  background: #D9D9D9;
  margin-left: 3rem;
}

.popup__content {
  flex: 1;
}

.popup__footer {
  border-top: 1px solid #D9D9D9;
  height: 8.4rem;
}
</style>