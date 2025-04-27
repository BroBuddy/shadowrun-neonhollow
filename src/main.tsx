import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import MissionRouter from './feature/mission/MissionRouter.tsx'
import CityRouter from './feature/city/CityRouter.tsx'
import ResourceRouter from './feature/resource/ResourceRouter.tsx'
import RuleRouter from './feature/rule/RuleRouter.tsx'

const Welcome = React.lazy(() => import('./pages/Welcome'))
const Matrix = React.lazy(() => import('./pages/Matrix'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                index: true,
                element: <Welcome />,
            },
            {
                path: '/matrix',
                element: <Matrix />,
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
