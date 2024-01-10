export default {
  furnitureList(state) {
    return state.furnitureList
  },
  getFavoriteList(state) {
    return state.favoriteList
  },
  getCartList(state) {
    return state.cartList
  },
  getSubtotal(state) {
    let total = 0;
    state.cartList.forEach(el => { total += el.price * el.counter })
    return total.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  },
  getShowItems(state) {
    return state.showItems
  }
}