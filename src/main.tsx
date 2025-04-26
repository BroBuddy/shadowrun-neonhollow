import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

const Sheet = React.lazy(() => import('./components/Sheet'))
const City = React.lazy(() => import('./components/City'))
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
                path: '/sheet',
                element: <Sheet />,
            },
            {
                path: '/city',
                element: <City />,
            },
            {
                path: '/:tagId',
                element: <TagContent />,
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
