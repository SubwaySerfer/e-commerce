import { createStore } from "vuex";

import homeModule from  './modules/home/index.js'
import blogModule from './modules/blog/index.js'
import cardInfo from "./modules/cardInfo/index.js";


const store = createStore({
  modules: {
    home: homeModule,
    blog: blogModule,
    cardInfo: cardInfo,
  }
})

export default store