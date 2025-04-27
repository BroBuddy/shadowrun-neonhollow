import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import MissionRouter from './feature/mission/MissionRouter.tsx'
import CityRouter from './feature/city/CityRouter.tsx'

const Sheet = React.lazy(() => import('./components/Sheet'))
const Matrix = React.lazy(() => import('./components/Matrix'))
const TagContent = React.lazy(() => import('./components/TagContent'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="/R001" replace />,
            },
            {
                path: '/sheet',
                element: <Sheet />,
            },
            {
                path: '/matrix',
                element: <Matrix />,
            },
            {
                path: '/:tagId',
                element: <TagContent />,
            },
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
