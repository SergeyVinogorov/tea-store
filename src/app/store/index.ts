import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { clientRtk } from 'src/shared/api'
import { appReducer } from './reducer'
import { rootReducer } from '@reduxjs/toolkit/src/tests/injectableCombineReducers.example'

//TODO: update when add auth slice
const persistConfig = {
  key: 'root',
  storage,
}
export function createAppStore() {
  const store = configureStore({
    reducer: persistReducer(
      persistConfig,
      appReducer
    ) as unknown as typeof rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(clientRtk.middleware),
  })

  setupListeners(store.dispatch)

  return store
}

export const appStore = createAppStore()
export const persistedStore = persistStore(appStore)

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
