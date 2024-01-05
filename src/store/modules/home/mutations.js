import jsonObj from '/public/assets/data/products.json'


export default {
  getFurnitureList(state) {
    state.furnitureList = jsonObj.products
  },
  toggleFavoriteList(state, payload) {
    try {
      if (state.favoriteList.length == 0 || !state.favoriteList.find(el => el.id === payload)) {
        state.favoriteList.push(state.furnitureList.find(el => el.id === payload))
      } else {
        state.favoriteList.splice(state.favoriteList.findIndex(el => el.id === payload), 1)
      }
    } catch {
      console.log('ошибка добавления.')
    }
  },
  editCartItems(state, payload) {
    let newItem = state.furnitureList.find(el => el.id === payload.id)

    if (payload.action === 'add') {
      if (!state.cartList.find(el => el.id === payload.id)) {
        newItem['counter'] = 1
        state.cartList.push(newItem)
      } else {
        state.cartList.find(el => el.id === payload.id).counter++
      }
    } else {
      if (!state.cartList.find(el => el.id === payload.id)) {
        return
      } else {
        state.cartList.find(el => el.id === payload.id).counter--
      }
    }
  }
}