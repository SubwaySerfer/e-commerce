import mutations from "./mutations"
import getters from "./getters"

export default {
  namespaced: true, state() {
    return {
      recentPosts: [],
      blogPosts: [],
      // categories: [
      //   { name: "Crafts", count: 0, link: '' },
      //   { name: "Design", count: 0, link: '' },
      //   { name: "Handmade", count: 0, link: '' },
      //   { name: "Interior", count: 0, link: '' },
      //   { name: "Wood", count: 0, link: '' },
      // ]
      categories: {

      },
    }
  },
  mutations,
  getters
}