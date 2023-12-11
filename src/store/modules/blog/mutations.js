import jsonObj from '/public/assets/data/recentPosts.json'

export default {
  getRecentPosts(state) {
    state.recentPosts = jsonObj.posts
  },
}