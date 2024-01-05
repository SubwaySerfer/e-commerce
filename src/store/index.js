import { createStore } from "vuex";

import homeModule from './modules/home/index.js'
import blogModule from './modules/blog/index.js'
import cardInfo from "./modules/cardInfo/index.js";
import headerModule from './modules/header/index.js'


const store = createStore({
  modules: {
    home: homeModule,
    blog: blogModule,
    cardInfo: cardInfo,
    header: headerModule,
  }
})

export default store