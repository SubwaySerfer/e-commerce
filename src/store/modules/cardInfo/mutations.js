import jsonObj from '../../../../public/assets/data/relatedList.json'

export default {
  createRandomList(state){
    state.relatedList = jsonObj.products.slice(0,4)
    // let arr = jsonObj.products
    // let length = arr.length
    // let result = new Set()
    // if (length <= 4 ){
    //   return arr
    // } else if (
    //   createList()
    // )
    // createList = () => {
    //   result.add(getRandomIntInclusive(0, length - 1))
    //   if(result.length < 4) {
    //     createList()
    //   }
    // }

    // getRandomIntInclusive = (min, max) => {
    //   min = Math.ceil(min);
    //   max = Math.floor(max);
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // console.log(result)
    // state.relatedList = result
  },
}