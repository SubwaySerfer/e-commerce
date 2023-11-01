<template>
  <section class="description">
    <ul class="nav-list">
      <li>
        <h3 class="nav-list__title nav-list__title_active">Description</h3>
      </li>
      <li>
        <h3 class="nav-list__title">Additional Information</h3>
      </li>
      <li>
        <h3 class="nav-list__title">Reviews [5]</h3>
      </li>
    </ul>
    <div class="text-block">
      <p>
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road.
      </p>
      <p>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with
        a well-balanced audio which boasts a clear midrange and extended highs
        for a sound that is both articulate and pronounced. The analogue knobs
        allow you to fine tune the controls to your personal preferences while
        the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>
    <div class="image-block">
      <div class="image-back">
        <img src="/src/assets/image/cardInfo/cardSofa1.png" alt="" />
      </div>
      <div class="image-back">
        <img src="/src/assets/image/cardInfo/cardSofa2.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.description {
  height: 74.4rem;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.8rem;
  padding-bottom: 6.5rem;
  font-family: Poppins;
  font-style: normal;
  color: #9f9f9f;
  gap: 3.6rem;
}
.nav-list {
  display: flex;
  text-align: center;
  gap: 5.2rem;
  margin: 0;
}
.nav-list > li {
  list-style-type: none;
}
.nav-list__title {
  font-size: 2.4rem;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
.nav-list__title_active {
  color: black;
  font-weight: 500;
}
.text-block {
  width: 102.6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: start;
  text-align: justify;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
}
.image-block {
  display: flex;
  gap: 3rem;
}
.image-back {
  width: 60.5rem;
  height: 34.8rem;
  border-radius: 1rem;
  background: #f9f1e7;
}
</style>
