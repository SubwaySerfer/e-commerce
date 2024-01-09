<template>
  <main class="profile">

    <form action="" @submit.prevent="console.log('dd')" class="profile-form">
      <img src="/assets/image/profile/profile-image.jpeg" alt="Profile avatar." width="250px" height="250px"
        class="profile__img" />
      <h2 class="profile-form__label">Profile info</h2>
      <ul class="profile-info">
        <li class="profile-field">
          <label for="" class="profile-field__el">Login</label>
          <input type="text" class="profile-field__input" />
        </li>
        <li class="profile-field">
          <label for="" class="profile-field__el">First Name</label>
          <input type="text" class="profile-field__input" />
        </li>
        <li class="profile-field">
          <label for="" class="profile-field__el">Last Name</label>
          <input type="text" class="profile-field__input" />
        </li>
        <li class="profile-field">
          <label for="" class="profile-field__el">Email</label>
          <input type="email" class="profile-field__input" />
        </li>
        <li class="profile-field">
          <label for="" class="profile-field__el">Phone</label>
          <input type="tel" class="profile-field__input" />
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
  margin: 0;
  margin-bottom: 1.5rem;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  font-size: 1.6rem;
}

.profile-field__el {
  text-align: start;
  width: 100%;
  font-weight: 500;
}

.profile-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.profile-form__label {
  font-size: 2.6rem;
  font-weight: 700;
  color: #b88e2f;
}

.profile-field__input {
  border-radius: .8rem;
  width: 35rem;
  height: 4rem;
  padding: 0 .8rem;
  font-size: 1.6rem;
  border: solid 1px #b88e2f;
}


.profile-field {
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  width: min-content;
  gap: .3rem;
  align-items: center;
  height: auto;
}

@media(max-width: 420px) {
  .profile-field__input {
    width: 90vw;
    height: 4.5rem;
  }

  .profile-form {
    gap: 2rem;
  }

  .profile-form__label {
    font-size: 2.8rem;
  }
}
</style>
