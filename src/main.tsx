import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Tag = React.lazy(() => import('./components/Tag'))
const Booklet = React.lazy(() => import('./components/Booklet'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Booklet />
                    </React.Suspense>
                ),
                children: [
                    {
                        path: '/:tagId',
                        element: (
                            <React.Suspense fallback={<>...</>}>
                                <Tag />
                            </React.Suspense>
                        ),
                    },
                ],
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
