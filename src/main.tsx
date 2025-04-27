import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import ResourceRouter from './feature/resource/ResourceRouter.tsx'
import CityRouter from './feature/city/CityRouter.tsx'
import MissionRouter from './feature/mission/MissionRouter.tsx'
import RuleRouter from './feature/rule/RuleRouter.tsx'
import { ErrorBoundary } from 'react-error-boundary'

const LoadingFallback = () => <p>Loading</p>
const ErrorFallback = () => <p>Error</p>
const Pages = {
    Welcome: React.lazy(() => import('./pages/Welcome')),
    Matrix: React.lazy(() => import('./pages/Matrix')),
}

const router = createBrowserRouter([
    {
        element: (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <App />
            </ErrorBoundary>
        ),
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Pages.Welcome />
                    </Suspense>
                ),
            },
            {
                path: '/matrix',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Pages.Matrix />
                    </Suspense>
                ),
            },
            ...RuleRouter,
            ...ResourceRouter,
            ...CityRouter,
            ...MissionRouter,
        ],
    },
])

const container = document.getElementById('root') as HTMLElement & {
    _reactRootContainer?: unknown
}

if (!container._reactRootContainer) {
    const root = createRoot(container)
    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    )
}
