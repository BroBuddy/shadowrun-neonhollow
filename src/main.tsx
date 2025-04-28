import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ResourceRouter from './feature/resource/ResourceRouter.tsx'
import CityRouter from './feature/city/CityRouter.tsx'
import MissionRouter from './feature/mission/MissionRouter.tsx'
import RuleRouter from './feature/rule/RuleRouter.tsx'
import CharacterRouter from './feature/character/CharacterRouter.tsx'
import App from './App.tsx'
import ArchetypeRouter from './feature/archetype/ArchetypeRouter.tsx'
import NameRouter from './feature/name/NameRouter.tsx'
import MetatypeRouter from './feature/metatype/MetatypeRouter.tsx'

const LoadingFallback = () => <p>Loading</p>
const ErrorFallback = () => <p>Error</p>
const Pages = {
    Welcome: React.lazy(() => import('./pages/Welcome')),
    Matrix: React.lazy(() => import('./pages/Matrix')),
    WellDone: React.lazy(() => import('./pages/WellDone')),
    OverwhelminglyGreat: React.lazy(
        () => import('./pages/OverwhelminglyGreat')
    ),
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
            {
                path: '/welldone',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Pages.WellDone />
                    </Suspense>
                ),
            },
            {
                path: '/overwhelminglygreat',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Pages.OverwhelminglyGreat />
                    </Suspense>
                ),
            },
            ...RuleRouter,
            ...CharacterRouter,
            ...MetatypeRouter,
            ...ArchetypeRouter,
            ...NameRouter,
            ...ResourceRouter,
            ...CityRouter,
            ...MissionRouter,
        ],
    },
])

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)

export { Pages, LoadingFallback, ErrorFallback }
