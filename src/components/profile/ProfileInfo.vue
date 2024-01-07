<template>
  <main class="profile">
    <img src="/assets/image/profile/profile-image.jpeg" alt="Profile avatar." width="250px" height="250px"
      class="profile__img" />
    <h2>Profile info</h2>
    <ul class="profile-info">
      <li>
        <label for="" class="profile-info__el">Login<input type="text" /></label>
      </li>
      <li>
        <label for="" class="profile-info__el">First Name<input type="text" /></label>
      </li>
      <li>
        <label for="" class="profile-info__el">Last Name<input type="text" /></label>
      </li>
      <li>
        <label for="" class="profile-info__el">Email<input type="email" /></label>
      </li>
      <li>
        <label for="" class="profile-info__el">Phone<input type="tel" /></label>
      </li>
    </ul>
  </main>
</template>
<!-- Сделать проверку на авторитизацию и модалку авторитизации -->

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100vw;
}

.profile__img {
  background-size: cover;
  width: 250px;
  box-shadow: 0px 0px 4px black;
  border-radius: 5px;
}

.profile-info {
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
}

.profile-info__el {
  display: flex;
  width: 30rem;
  justify-content: space-between;
  text-wrap: nowrap;
  align-items: center;
}
</style>
