import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Tag = React.lazy(() => import('./components/Tag'))
const Booklet = React.lazy(() => import('./components/Booklet'))
const Mission = React.lazy(() => import('./components/Mission'))

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
            {
                path: '/mission',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Mission />
                    </React.Suspense>
                ),
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
