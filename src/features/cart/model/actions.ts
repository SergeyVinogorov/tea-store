import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  addOneItem,
  removeOneItem,
  removeProductFromCart,
  mapCartItem,
  incVersion,
  CartItemDto,
  cartApi,
} from 'src/entities/cart'
import { debounce } from 'src/shared/lib'
import { Product } from 'src/entities/product'

const TIMEOUT = 1500

export const updateCartThunk = createAsyncThunk<
  void,
  { items: CartItemDto[]; version: number },
  { state: RootState }
>('cart/updateCartThunk', async (payload, { dispatch }) => {
  await dispatch(cartApi.endpoints.updateCart.initiate(payload)).unwrap()
})

const syncCart = debounce((dispatch: AppDispatch, state: RootState) => {
  const cartItemsDto = mapCartItem(state.cart)
  return dispatch(
    updateCartThunk({ items: cartItemsDto, version: state.cart.version })
  )
}, TIMEOUT)

export const removeCartItemThunk = createAsyncThunk<
  void,
  number,
  { state: RootState }
>(
  'cart/removeCartItemThunk',
  async (productId: number, { dispatch, getState }) => {
    dispatch(removeProductFromCart(productId))
    dispatch(incVersion())
    syncCart(dispatch as AppDispatch, getState())
  }
)

export const removeCartProductThunk = createAsyncThunk<
  void,
  Product,
  { state: RootState }
>(
  'cart/removeCartProductThunk',
  async (product: Product, { dispatch, getState }) => {
    dispatch(removeOneItem(product))
    dispatch(incVersion())
    syncCart(dispatch as AppDispatch, getState())
  }
)

export const addCartProductThunk = createAsyncThunk<
  void,
  Product,
  { state: RootState }
>(
  'cart/addCartProductThunk',
  async (product: Product, { dispatch, getState }) => {
    dispatch(addOneItem(product))
    dispatch(incVersion())
    syncCart(dispatch as AppDispatch, getState())
  }
)
