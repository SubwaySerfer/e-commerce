import jsonObj from '../../../../public/assets/data/products.json'

export default {
  getFurnitureList(state){
    state.furnitureList = jsonObj.products

  },
}