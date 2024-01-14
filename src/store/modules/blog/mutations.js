import jsonObj from '/public/assets/data/recentPosts.json'
import ArticleObj from '/public/assets/data/blogPosts.json'


export default {
  getRecentPosts(state) {
    state.recentPosts = jsonObj.posts
  },
  createBlogPostsList(state) {
    state.blogPosts = ArticleObj.posts
  },
  createCategories(state) {
    ArticleObj.posts.forEach(el => {
      if (typeof (state.categories[el.tag]) === 'undefined') {
        state.categories[el.tag] = [el.id]
      } else {
        state.categories[el.tag].push(el.id)
      }
    })
  }
}