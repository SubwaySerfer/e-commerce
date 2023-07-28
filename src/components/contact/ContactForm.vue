<template>
  <section>
    <div>
      <h2>Get In Touch With Us</h2>
      <p class="main-info">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
    </div>
    <div class="content-wrapper">
      <div class="content-wrapper_info">
        <div class="info-card">
          <img
            src="src/assets/icons/contact/local-icon.svg"
            alt="location icon"
            class="info-card_img"
          />
          <div class="info-card_text">
            <h3>Address</h3>
            <p class="content-wrapper_paragraph">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
        </div>
        <div class="info-card">
          <img
            src="src/assets/icons/contact/phone-icon.svg"
            alt="phone icon"
            class="info-card_img"
          />
          <div class="info-card_text">
            <h3>Phone</h3>
            <p class="content-wrapper_paragraph">
              Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
            </p>
          </div>
        </div>
        <div class="info-card">
          <img
            src="src/assets/icons/contact/clock-icon.svg"
            alt="clock icon"
            class="info-card_img"
          />
          <div class="info-card_text">
            <h3>Working Time</h3>
            <p class="content-wrapper_paragraph">
              Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00x
            </p>
          </div>
        </div>
      </div>
      <div class="form-box">
        <label for="">Your name</label>
        <input type="text" />

        <label for="">Email address</label>
        <input type="email" />

        <label for="">Subject</label>
        <input type="text" />

        <label for="">Message</label>
        <textarea></textarea>

        <base-button>Submit</base-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 114.5rem;
  padding: 9.8rem 19.1rem 6.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
h2 {
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.7rem;
}
.main-info {
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
  gap: 3rem;
}
.info-card_img {
  align-self: flex-start;
}
.content-wrapper_info {
  display: flex;
  flex-direction: column;
  padding: 4.6rem 7.5rem 0 5.4rem;
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
}
.info-card_text {
  display: flex;
  flex-direction: column;
}
h3 {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.form-box {
  display: flex;
  flex-direction: column;
}
</style>
