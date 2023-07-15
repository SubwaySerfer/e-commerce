<template>
  <section>
    <div class="filters-box-first">
      <ul>
        <li>
          <img
            src="src/assets/icons/shop/filters-scroll.svg"
            alt="filter scroll icon"
          />
        </li>
        <li class="scroll-label">Filter</li>
        <li>
          <img
            src="src/assets/icons/shop/filters-dots.svg"
            alt="filter dots"
            class="filter-dots"
          />
        </li>
        <li>
          <img
            src="src/assets/icons/shop/filters-view.svg"
            alt="filter view"
            class="filter-view"
          />
        </li>
      </ul>
      <span class="cross-line"></span>
      <h6>Showing 1–16 of 32 results</h6>
    </div>
    <div class="filters-box-sec">
      <label for="">Show</label>
      <input type="number" placeholder="16" class="show-input" />
      <label for="">Short by</label>
      <input type="text" placeholder="Default" class="short-input" />
    </div>
  </section>
</template>

<style scoped>
section {
  height: 10rem;
  background-color: #f9f1e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem 0 9.8rem;
}
.filters-box-first {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
}
.cross-line {
  background-color: #9f9f9f;
  width: 0.2rem;
  height: 3.7rem;
}
.scroll-label {
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  padding-top: 3px;
}
.filter-dots {
  padding-left: 12px;
  padding-top: 3px;
}
.filter-view {
  padding-left: 12px;
}
h6 {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 2px;
}
.filters-box-sec {
  display: flex;
  gap: 1.7rem;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
}
input {
  color: #9f9f9f;
  font-size: 2rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
}
/* label {
} */
.show-input {
  width: 5.5rem;
  height: 5.5rem;
  background-color: #ffffff;
  /* padding: 1.2rem 1.3rem 1.2rem 1.8rem; */
  display: block;
  text-align: center;

  margin-right: 1.2rem;
}
.short-input {
  width: 18.8rem;
  height: 5.5rem;
  padding-left: 3rem;
  /* flex-shrink: 0; */
}
</style>
