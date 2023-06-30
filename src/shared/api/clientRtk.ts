import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const PRODUCTS = 'PRODUCTS'
export const ORDER_TAG = 'ORDER_TAG'
export const CART_TAG = 'CART_TAG'
export const BASE_API_URL = 'http://localhost:3000'
export const API_DELAY = 200

const baseQuery = fetchBaseQuery({ baseUrl: BASE_API_URL })
export const clientRtk = createApi({
  baseQuery,
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: [PRODUCTS, ORDER_TAG, CART_TAG],
})
