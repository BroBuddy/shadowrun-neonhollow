import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Tag = React.lazy(() => import('./components/Tag'))
const Booklet = React.lazy(() => import('./components/Booklet'))
const Mission = React.lazy(() => import('./components/Mission'))
const Character = React.lazy(() => import('./components/Character'))
const Town = React.lazy(() => import('./components/Town'))

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
            {
                path: '/character',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Character />
                    </React.Suspense>
                ),
            },
            {
                path: '/town',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Town />
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
