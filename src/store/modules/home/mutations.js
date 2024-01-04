import jsonObj from '../../../../public/assets/data/products.json'

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
  }
}