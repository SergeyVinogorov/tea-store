declare global {
  type RootState = import('./store').RootState

  type AppDispatch = import('./store').AppDispatch
}

export {}
