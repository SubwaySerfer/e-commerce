import jsonObj from '../../../assets/data/recentPosts.json'

export default {
  getRecentPosts(state){
    state.recentPosts = jsonObj.posts
  },
}