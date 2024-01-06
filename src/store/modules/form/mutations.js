export default {
  onSubmitForm(state, payload) {
    state.formData = payload
    console.log('Форма отправлена!', state.formData)
  }
}