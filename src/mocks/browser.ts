import { setupWorker } from 'msw'

import { cartHandlers } from './handlers/cartHandlers'
import { productsHandlers } from './handlers/productHandler'

export const worker = setupWorker(...cartHandlers, ...productsHandlers)

export const startMocksWorker = async () => {
  await worker.start({
    onUnhandledRequest: 'warn',
  })
}
