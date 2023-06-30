import products from '../products.json'
import { Filter, SortBy, SortId } from 'src/entities/product'

const productSortMap = {
  nameASC: (a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
  },
  nameDESC: (a, b) => this.ascName(a, b).reverse(),
  priceDESC: (a, b) => b.price - a.price,
  priceASC: (a, b) => a.price - b.price,
}
export function mockProductByQueries(
  sortId?: SortId,
  sortBy?: SortBy,
  filter?: Filter
) {
  let resultProducts = products
  if (filter) {
    const keys = Object.keys(filter)
    resultProducts = resultProducts.filter((product) =>
      keys.find((key) => product[key] === filter[key])
    )
  }
  if (sortId && sortBy) {
    const sortName = sortId + sortBy
    resultProducts = resultProducts.sort(productSortMap[sortName])
  }
  return resultProducts
}
