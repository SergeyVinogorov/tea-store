export {
  type Cart,
  cartApi,
  type CartDto,
  type CartItem,
  type CartItemDto,
} from './api/cartApi'

export { mapCartItem } from './lib/mapCartItem'

export {
  addOneItem,
  cartSlice,
  clearCartData,
  incVersion,
  removeItem as removeProductFromCart,
  removeOneItem,
  selectCartTotalPrice,
  selectProductInCart,
  selectProductsInCart,
  selectTotalQuantity,
} from './model/slice'
