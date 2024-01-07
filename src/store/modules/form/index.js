import mutations from "./mutations"
import getters from "./getters"

export default {
  namespaced: true, state() {
    return {
      formData: {}
    }
  },
  mutations,
  getters
}