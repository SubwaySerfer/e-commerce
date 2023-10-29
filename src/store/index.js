import { createStore } from "vuex";

import homeModule from  './modules/home/index.js'
import blogModule from './modules/blog/index.js'


const store = createStore({
  modules: {
    home: homeModule,
    blog: blogModule
  }
})

export default store