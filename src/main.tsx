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
import MechanicRouter from './feature/mechanic/MechanicRouter.tsx'
import BackgroundRouter from './feature/background/BackgroundRouter.tsx'
import EventRouter from './feature/event/EventRouter.tsx'
import Preloader from './components/Preloader.tsx'

const ErrorFallback = () => <p>Error: Please reload the App.</p>
const Pages = {
    Welcome: React.lazy(() => import('./pages/Welcome')),
    Event: React.lazy(() => import('./pages/Event.tsx')),
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
                    <Suspense fallback={<Preloader />}>
                        <Pages.Welcome />
                    </Suspense>
                ),
            },
            {
                path: '/event',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <Pages.Event />
                    </Suspense>
                ),
            },
            {
                path: '/welldone',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <Pages.WellDone />
                    </Suspense>
                ),
            },
            {
                path: '/overwhelminglygreat',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <Pages.OverwhelminglyGreat />
                    </Suspense>
                ),
            },
            ...RuleRouter,
            ...MechanicRouter,
            ...CharacterRouter,
            ...MetatypeRouter,
            ...ArchetypeRouter,
            ...BackgroundRouter,
            ...NameRouter,
            ...ResourceRouter,
            ...CityRouter,
            ...MissionRouter,
            ...EventRouter,
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

export { Pages, Preloader, ErrorFallback }
