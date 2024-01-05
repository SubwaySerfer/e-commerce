export default {
  toggleCartPopup(state) {
    state.isCartPopupOpen = !state.isCartPopupOpen
  },
  closeCartPopup(state) {
    state.isCartPopupOpen = false
  }
}
