import { combineReducers } from '@reduxjs/toolkit'
import { cartSlice } from 'src/entities/cart'
import { clientRtk } from 'src/shared/api'

export const appReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
  [clientRtk.reducerPath]: clientRtk.reducer,
})
