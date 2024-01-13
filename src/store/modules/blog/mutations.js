import jsonObj from '/public/assets/data/recentPosts.json'
import ArticleObj from '/public/assets/data/blogPosts.json'


export default {
  getRecentPosts(state) {
    state.recentPosts = jsonObj.posts
  },
  createBlogPostsList(state) {
    state.blogPosts = ArticleObj.posts
  }
}