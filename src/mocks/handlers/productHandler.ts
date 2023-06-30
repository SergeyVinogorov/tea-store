import { rest } from 'msw'
import { API_DELAY, BASE_API_URL } from 'src/shared/api'

import { mockProductByQueries } from '../dto/mockProductByQueries'

export const productsHandlers = [
  rest.get(`${BASE_API_URL}/products`, async (req, res, ctx) => {
    let sortId = req.url.searchParams.get('sortId')
    let sortBy = req.url.searchParams.get('sortBy')
    let filter = req.url.searchParams.get('filter')
    let products = mockProductByQueries({ filter, sortBy, sortId })

    return await res(ctx.delay(API_DELAY), ctx.status(200), ctx.json(products))
  }),
]
