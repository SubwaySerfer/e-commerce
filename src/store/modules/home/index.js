import mutations from "./mutations"
import getters from "./getters"

export default {
  namespaced: true, state() {
    return {
      furnitureList: [],
      favoriteList: [],
      cartList: [],
      showItems: 4,
    }
  },
  mutations,
  getters
}