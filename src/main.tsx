import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App'

const Town = React.lazy(() => import('./features/town/Town'))
const TownDetail = React.lazy(() => import('./features/town/TownDetail'))
const TagContent = React.lazy(() => import('./components/TagContent'))
const ResourceDetail = React.lazy(
    () => import('./features/resource/ResourceDetail')
)

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to="/R001" replace />,
            },
            {
                path: '/town',
                element: (
                    <React.Suspense fallback={<></>}>
                        <Town />
                    </React.Suspense>
                ),
            },
            {
                path: '/town/:facilityTag',
                element: (
                    <React.Suspense fallback={<></>}>
                        <TownDetail />
                    </React.Suspense>
                ),
            },
            {
                path: '/resource/:resourceTag',
                element: (
                    <React.Suspense fallback={<></>}>
                        <ResourceDetail />
                    </React.Suspense>
                ),
            },
            {
                path: '/:tagId',
                element: (
                    <React.Suspense fallback={<></>}>
                        <TagContent />
                    </React.Suspense>
                ),
            },
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
