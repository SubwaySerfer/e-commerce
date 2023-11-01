<template>
  <div class="review-block">
    <div class="review-block__stars">
      <div>
        <svg
          style="width: 0; height: 0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <defs>
            <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stop-color="#fed94b"></stop>
              <stop offset="50%" stop-color="#f7f0c3"></stop>
            </linearGradient>

            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="star"
            >
              <path
                d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"
              />
            </symbol>
          </defs>
        </svg>
      </div>

      <p class="star-rating" aria-label="4.5 stars out of 5">
        <svg class="c-star active" width="20" height="20" viewBox="0 0 20 20">
          <use xlink:href="#star"></use>
        </svg>
        <svg class="c-star active" width="20" height="20" viewBox="0 0 20 20">
          <use xlink:href="#star"></use>
        </svg>
        <svg class="c-star active" width="20" height="20" viewBox="0 0 20 20">
          <use xlink:href="#star"></use>
        </svg>
        <svg class="c-star active" width="20" height="20" viewBox="0 0 20 20">
          <use xlink:href="#star"></use>
        </svg>
        <svg class="c-star active" width="20" height="20" viewBox="0 0 20 20">
          <use xlink:href="#star" fill="url(#half)"></use>
        </svg>
      </p>
    </div>
    <span class="line"></span>
    <span class="review-block__customers">5 Customer Review</span>
  </div>
</template>

<style scoped>
.review-block {
  height: 3rem;
  margin: 1rem 0 1.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.line {
  display: block;
  width: 0.1rem;
  height: 3rem;
  background: #9f9f9f;
  margin-left: 1.8rem;
  margin-right: 2.2rem;
}
.review-block__customers {
  color: #9f9f9f;
  font-family: Poppins;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.review-block__stars {
  display: flex;
}

.star-rating {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
}

.c-star {
  width: var(--size, 2rem);
  height: var(--size, 2rem);
  fill: white;
  stroke: none;

  &.active {
    fill: #ffc700;
  }
}
</style>
