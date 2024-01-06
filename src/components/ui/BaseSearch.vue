<template>
  <div class="search">
    <input type="text" name="serch" id="search" class="search-input" />
    <img src="/assets/icons/ui/search-input.svg" alt="search." class="search-input__icon" />
  </div>
</template>

<style scoped>
.search-input {
  width: 31.1rem;
  height: 5.8rem;
  border-radius: 1rem;
  border: 1px solid #9f9f9f;
  background: #fff;
  padding-left: 15px;
  color: #000;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.search {
  position: relative;
}

.search-input__icon {
  position: absolute;
  right: 1rem;
  top: 1.7rem;
  cursor: pointer;
}

@media(max-width: 1100px) {
  .search-input {
    width: 100%;
  }

  .search {
    width: 100%;
  }
}
</style>
