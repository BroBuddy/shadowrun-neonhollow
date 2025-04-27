import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import MissionRouter from './feature/mission/MissionRouter.tsx'
import CityRouter from './feature/city/CityRouter.tsx'

const Welcome = React.lazy(() => import('./pages/Welcome'))
const Rules = React.lazy(() => import('./pages/Rules'))
const Matrix = React.lazy(() => import('./pages/Matrix'))
const TagContent = React.lazy(() => import('./components/TagContent'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                index: true,
                element: <Welcome />,
            },
            {
                path: '/rules',
                element: <Rules />,
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
