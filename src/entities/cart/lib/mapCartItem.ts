import { Cart, CartItemDto } from '../api/cartApi'

export function mapCartItem(cart: Cart): CartItemDto[] {
  return Object.values(cart.itemsMap).map((item) => ({
    productId: item.product.id,
    quantity: item.quantity,
  }))
}
