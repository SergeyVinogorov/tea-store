import { rest } from 'msw'
import { API_DELAY, BASE_API_URL } from 'src/shared/api'

import { mockCartDto } from '../dto/mockCardDto'

const cartStorage = { items: [], version: 0 }
export const cartHandlers = [
  rest.get(`${BASE_API_URL}/cart`, async (req, res, ctx) => {
    try {
      return await res(
        ctx.delay(API_DELAY),
        ctx.status(200),
        ctx.json(mockCartDto(cartStorage.items, cartStorage.version))
      )
    } catch (err) {
      return await res(ctx.status(403), ctx.json('Forbidden'))
    }
  }),

  rest.patch(`${BASE_API_URL}/cart`, async (req, res, ctx) => {
    try {
      let apiDelay = req.url.searchParams.get('delay')
      let body = await req.json()

      cartStorage.items = body.items
      cartStorage.version = body.version

      return await res(
        ctx.delay(Number(apiDelay) || API_DELAY),
        ctx.status(200),
        ctx.json(mockCartDto(cartStorage.items, cartStorage.version))
      )
    } catch (err) {
      return await res(ctx.status(403), ctx.json('Forbidden'))
    }
  }),
]
