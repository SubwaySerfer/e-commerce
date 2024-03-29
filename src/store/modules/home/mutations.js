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
  createCartWithStorage(state, payload) {
    state.cartList = Object.values(payload.cartList)
  },
  editCartItems(state, payload) {
    let newItem = state.furnitureList.find(el => el.id === payload.id)
    let currentItem = state.cartList.find(el => el.id === payload.id)
    if (payload.action === 'add') {
      if (!currentItem) {
        state.cartList.push(newItem)
        payload.counter ? (newItem['counter'] = payload.counter) : (newItem['counter'] = 1)
      } else if (payload.counter) {
        currentItem.counter = payload.counter
      } else {
        currentItem.counter++
      }
    } else if (payload.action === 'del') {
      state.cartList.splice(state.cartList.findIndex(el => el.id === payload.id), 1)
    } else {
      if (!currentItem) {
        return
      } else {
        if (currentItem.counter == 0) {
          return
        }
        currentItem.counter--
      }
    }
    localStorage.setItem('e-commerce', JSON.stringify({ 'cartList': state.cartList }))
  },
  editShowItems(state, payload) {
    switch (payload) {
      case 'minus':
        state.showItems <= 4 ? state.showItems = 4 : state.showItems = state.showItems - 4;
        break
      case 'plus':
        state.showItems = state.showItems + 4;
        state.showItems > state.furnitureList.length ? state.showItems = state.showItems - 4 : []
        break
    }
  }
}