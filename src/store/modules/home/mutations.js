import jsonObj from '../../../assets/data/products.json'

export default {
  getFurnitureList(state){
    // console.log(typeof jsonObj)
    // state.furnitureList = JSON.parse(jsonObj)
    state.furnitureList = jsonObj.products

  },
}