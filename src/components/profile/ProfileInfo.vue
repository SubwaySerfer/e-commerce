<template>
  <main class="profile">

    <form action="" @submit.prevent="console.log('dd')" class="profile-form">
      <img src="/assets/image/profile/profile-image.jpeg" alt="Profile avatar." width="250px" height="250px"
        class="profile__img" />
      <h2 class="profile-form__label">Profile info</h2>
      <ul class="profile-info">
        <li class="profile-field">
          <label for="" class="profile-field__el">Login<input type="text" class="profile-field__input" /></label>
        </li>
        <li class="profile-field">
          <label for="" class="profile-field__el">First Name<input type="text" class="profile-field__input" /></label>
        </li>
        <li class="profile-field">
          <label for="" class="profile-field__el">Last Name<input type="text" class="profile-field__input" /></label>
        </li>
        <li class="profile-field">
          <label for="" class="profile-field__el">Email<input type="email" class="profile-field__input" /></label>
        </li>
        <li class="profile-field">
          <label for="" class="profile-field__el">Phone<input type="tel" class="profile-field__input" /></label>
        </li>
      </ul>
      <base-button modeLabel="white-btn" mode="white-btn" type="submit">Save</base-button>
    </form>
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
  padding-bottom: 5rem;
}

.profile__img {
  background-size: cover;
  width: 250px;
  box-shadow: 0px 0px 4px black;
  border-radius: 5px;
}

.profile-info {
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  font-size: 1.6rem;
  padding-left: 7.5rem;
}

.profile-field__el {
  display: flex;
  width: 50rem;
  justify-content: space-between;
  gap: 3rem;
  text-wrap: nowrap;
  align-items: center;
  height: 100%;
}

.profile-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.profile-form__label {
  font-size: 2.4rem;
  font-weight: 700;
  color: #b88e2f;
}

.profile-field__input {
  height: 100%;
  border-radius: .8rem;
  width: 50%;
  padding: 0 .8rem;
  font-size: 1.6rem;
  border: solid 1px #b88e2f;
}


.profile-field {
  height: 3.5rem;
}
</style>
