import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

const TagContent = React.lazy(() => import('./components/TagContent'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to="/R001" replace />,
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
