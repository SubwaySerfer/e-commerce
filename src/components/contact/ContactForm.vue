<template>
  <section class="contact-wrapper">
    <div class="contact-info">
      <h2 class="contact-info__label">Get In Touch With Us</h2>
      <p class="contact-info__description">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
    </div>
    <div class="content-wrapper">
      <div class="content-wrapper_info">
        <div class="info-card info-card_local">
          <img src="/assets/icons/contact/local-icon.svg" alt="location icon" class="info-card_img icon_local" />
          <div class="text-contact">
            <h3 class="text-contact__label">Address</h3>
            <p class="content-wrapper_paragraph">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
        </div>
        <div class="info-card">
          <img src="/assets/icons/contact/phone-icon.svg" alt="phone icon" class="info-card_img icon_phone" />
          <div class="text-contact">
            <h3 class="text-contact__label">Phone</h3>
            <p class="content-wrapper_paragraph">
              Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
            </p>
          </div>
        </div>
        <div class="info-card info-card_clock">
          <img src="/assets/icons/contact/clock-icon.svg" alt="clock icon" class="info-card_img icon_clock" />
          <div class="text-contact">
            <h3 class="text-contact__label">Working Time</h3>
            <p class="content-wrapper_paragraph">
              Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
      </div>
      <form class="form-box" @submit.prevent="onSubmit">
        <label for="">Your name</label>
        <input class="form-box__input" v-model="firstName" type="text" placeholder="Abc" />

        <label for="">Email address</label>
        <input class="form-box__input" v-model="email" type="email" placeholder="Abc@def.com" />

        <label for="">Subject</label>
        <input class="form-box__input" v-model="subject" type="text" placeholder="This is an optional" />

        <label for="">Message</label>
        <textarea v-model="message" placeholder="Hi! i’d like to ask about"></textarea>

        <base-button class="btn btn-contact" type="submit">Submit</base-button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  methods: {
    onSubmit() {
      try {
        this.$store.commit('form/onSubmitForm', { firstName: this.firstName, email: this.email, subject: this.subject, message: this.message })
        this.firstName = '';
        this.email = '';
        this.subject = '';
        this.message = ''
      } catch {
        console.log('ошибка ввода')
      }
    }
  }
}
</script>

<style scoped>
.contact-wrapper {
  height: 114.5rem;
  padding: 9.8rem 19.1rem 6.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.contact-info__label {
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.7rem;
}

.contact-info__description {
  color: #9f9f9f;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 64.5rem;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 8.2rem;
}

.btn-contact {
  color: #fff;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.icon_clock {
  padding-top: 1.8rem;
}

.icon_phone {
  padding-top: 1.3rem;
}

.icon_local {
  padding-top: 1.2rem;
}

.icon_phone {
  padding-left: 2px;
}

.info-card_local,
.info-card_clock {
  padding-left: 1rem;
}

.info-card_img {
  align-self: flex-start;
  /* width: 23px; */
}

.content-wrapper_info {
  display: flex;
  flex-direction: column;
  padding: 4.6rem 7.5rem 0 1.5rem;
  gap: 3.2rem;
}

.content-wrapper_paragraph {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 21.2rem;
}

.info-card {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}

.text-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1rem;
  text-align: start;
}

.text-contact__label {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

label {
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: start;
  margin-bottom: 2.2rem;
}

.form-box {
  display: flex;
  flex-direction: column;
  width: 63.5rem;
  padding: 5.1rem 2rem 6.3rem 8.4rem;
  justify-content: space-between;
}

.form-box__input {
  height: 7.5rem;
  border-radius: 1rem;
  border: 1px solid #9f9f9f;
  background: #fff;
  margin-bottom: 3.6rem;
  padding: 2.6rem;
  padding-left: 3rem;
  color: #9f9f9f;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

textarea {
  margin-bottom: 4.8rem;
  height: 12rem;
  color: #9f9f9f;
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 2.6rem 2.7rem;
  border-radius: 1rem;
  border: 1px solid #9f9f9f;
  background: #fff;
}

.btn {
  width: 23.7rem;
  height: 5.5rem;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #b88e2f;
  background: #b88e2f;
}

@media(max-width: 1100px) {
  .contact-wrapper {
    height: auto;
    padding: 9.8rem 4vw 6.3rem;
  }

  .content-wrapper {
    justify-content: space-between;
    width: 100%;
    gap: 2vw;
  }

  .content-wrapper_info {
    padding: 4.6rem 0 0;
  }

  .form-box {
    padding: 5.1rem 0 6.3rem;
    max-width: 51.3rem;
  }
}

@media(max-width: 720px) {
  .contact-info__label {
    margin-bottom: 2rem;
  }

  .content-wrapper {
    padding-top: 0;
    flex-direction: column-reverse;
    align-items: center
  }

  .btn-contact {
    width: 50vw;
    align-self: center;
    margin: 0;
  }

  .content-wrapper_info {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 4rem;
  }
}

@media (max-width: 580px) {
  .form-box {
    width: 100%;
  }

  .btn-contact {
    width: 100%;
    height: 6rem;
  }
}
</style>
