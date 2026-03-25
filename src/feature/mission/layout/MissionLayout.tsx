import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Preloader from '@/components/Preloader'
import Error from '@/pages/Error'

const MissionLayout = () => (
  <ErrorBoundary fallback={<Error />}>
    <Suspense fallback={<Preloader />}>
      <Outlet />
    </Suspense>
  </ErrorBoundary>
)

export default MissionLayout