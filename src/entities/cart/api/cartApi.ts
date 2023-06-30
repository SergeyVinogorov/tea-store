import { clientRtk, CART_TAG } from 'src/shared/api'
import { Product } from '../../product'

export type CartDto = {
  cartItems: Array<{
    product: Product
    quantity: number
  }>
  version: number
}

export type CartItemDto = {
  productId: number
  quantity: number
}
export type CartItem = {
  product: Product
  quantity: number
}

export type Cart = {
  itemsMap: Record<number, CartItem>
  version: number
}

export const cartApi = clientRtk.injectEndpoints({
  endpoints: (build) => ({
    cart: build.query<Cart, void>({
      query: () => ({
        url: `/cart`,
      }),
      providesTags: [CART_TAG],
    }),
    updateCart: build.mutation<{}, { items: CartItemDto[]; version: number }>({
      query: ({ items, version }) => ({
        url: `/cart`,
        method: 'PATCH',
        body: { items, version },
        params: { delay: 500 },
      }),
      invalidatesTags: [CART_TAG],
    }),
  }),
})

export const { useCartQuery, useUpdateCartMutation } = cartApi
