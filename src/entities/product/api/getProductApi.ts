import { clientRtk } from 'src/shared/api'

export type SortBy = 'DESC' | 'ASC'
export type SortId = 'name' | 'price'
type FilterName = 'type' | 'country'
export interface Filter {
  [key: FilterName]: string
}

export type Product = {
  id: number
  name: string
  desc: string
  image: string
  price: number
  weight: number
  rating: string
  type: string
  country: string
}

export interface ProductQuery {
  sortId: SortId
  sortBy: SortBy
  filter: Filter
}
export const productApi = clientRtk.injectEndpoints({
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => {
        return {
          url: '/products',
        }
      },
    }),
  }),
  overrideExisting: false,
})

export const { useFetchProductsQuery } = productApi
