import { Suspense } from 'react'
import { Route, RouteProps, Routes } from 'react-router-dom'
import { PageLoader } from 'src/widgets/PageLoader'
import { routeConfig } from './routerConfig'

export const AppRouter = () => {
  //TODO: add Auth component with check authData
  const renderWithWrapper = ({ path, element }: RouteProps) => (
    <Route key={path} path={path} element={element}></Route>
  )

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
}
