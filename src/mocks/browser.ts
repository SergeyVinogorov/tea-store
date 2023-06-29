import { setupWorker } from 'msw'

import { mainHandlers } from './mainHandlers'
export const worker = setupWorker(...mainHandlers)

export const startMocksWorker = async () => {
  await worker.start({
    onUnhandledRequest: 'warn',
  })
}
