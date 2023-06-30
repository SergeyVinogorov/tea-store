import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { AppRouter } from './router/AppRouter'
import { appStore, persistedStore } from './store'

import './styles/index.css'

const startApp = async () => {
  let module = await import('src/mocks/browser')
  await module.startMocksWorker()
}
const root = document.getElementById('root')

startApp().then(() => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ReduxProvider store={appStore}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </React.StrictMode>
  )
})
