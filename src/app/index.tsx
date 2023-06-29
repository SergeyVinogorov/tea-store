import React from 'react'
import ReactDOM from 'react-dom/client'

import { startMocksWorker } from '../mocks/browser'
import { CartPage } from '../pages/cart'

const startApp = async () => {
  await startMocksWorker()
}
const root = document.getElementById('root')

startApp().then(() => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <CartPage />
    </React.StrictMode>
  )
})
