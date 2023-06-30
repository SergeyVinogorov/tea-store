import products from '../products.json'
import { CartDto, CartItemDto } from 'src/entities/cart'

export function mockCartDto(items: CartItemDto[], version: number): CartDto {
  return {
    version,
    cartItems: items
      .map((item) => ({
        product: products.find((product) => product.id === item.productId),
        quantity: 1,
      }))
      .filter((item) => Boolean(item.product)),
  }
}
