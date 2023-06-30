import { RouteProps } from 'react-router-dom'
import { NotFoundPage } from 'src/pages/404'
import { MainPage } from 'src/pages/main'

export enum AppRoutes {
  MAIN = 'main',
  // CART = 'cart',
  // ORDER = 'order',
  NOT_FOUND = 'not_found',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: '/',
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
