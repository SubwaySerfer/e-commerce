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
        <div class="info-card info-card_local">
          <img
            src="assets/icons/contact/local-icon.svg"
            alt="location icon"
            class="info-card_img icon_local"
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
            src="assets/icons/contact/phone-icon.svg"
            alt="phone icon"
            class="info-card_img icon_phone"
          />
          <div class="info-card_text">
            <h3>Phone</h3>
            <p class="content-wrapper_paragraph">
              Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
            </p>
          </div>
        </div>
        <div class="info-card info-card_clock">
          <img
            src="assets/icons/contact/clock-icon.svg"
            alt="clock icon"
            class="info-card_img icon_clock"
          />
          <div class="info-card_text">
            <h3>Working Time</h3>
            <p class="content-wrapper_paragraph">
              Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
      </div>
      <div class="form-box">
        <label for="">Your name</label>
        <input type="text" placeholder="Abc" />

        <label for="">Email address</label>
        <input type="email" placeholder="Abc@def.com" />

        <label for="">Subject</label>
        <input type="text" placeholder="This is an optional" />

        <label for="">Message</label>
        <textarea placeholder="Hi! i’d like to ask about"></textarea>

        <base-button class="btn">Submit</base-button>
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
  /* gap: 5.1rem; */
  justify-content: flex-start;
  padding-top: 8.2rem;
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
.info-card_text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1rem;
  text-align: start;
  /* padding-left: 0.5rem; */
}
h3 {
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* text-indent: 2.8rem; */
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
  /* gap: 3.6rem; */
}
input {
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
</style>
