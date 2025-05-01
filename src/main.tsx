import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ColorSchemeProvider } from './context/ColorSchemeProvider.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { register } from '../scripts/serviceWorkerRegistration.ts'
import ResourceRouter from './feature/resource/ResourceRouter.tsx'
import CityRouter from './feature/city/CityRouter.tsx'
import MissionRouter from './feature/mission/MissionRouter.tsx'
import RuleRouter from './feature/rule/RuleRouter.tsx'
import CharacterRouter from './feature/character/CharacterRouter.tsx'
import ArchetypeRouter from './feature/archetype/ArchetypeRouter.tsx'
import NameRouter from './feature/name/NameRouter.tsx'
import MetatypeRouter from './feature/metatype/MetatypeRouter.tsx'
import MechanicRouter from './feature/mechanic/MechanicRouter.tsx'
import EventRouter from './feature/event/EventRouter.tsx'
import Preloader from './components/Preloader.tsx'
import Error from './pages/Error.tsx'
import App from './App.tsx'

const ErrorFallback = () => <Error />
const Pages = {
    Welcome: React.lazy(() => import('./pages/Welcome')),
    Event: React.lazy(() => import('./feature/event/pages/Event.tsx')),
    WellDone: React.lazy(() => import('./pages/WellDone')),
    OverwhelminglyGreat: React.lazy(
        () => import('./pages/OverwhelminglyGreat')
    ),
}

const router = createBrowserRouter([
    {
        element: (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ColorSchemeProvider>
                    <App />
                </ColorSchemeProvider>
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

register()

export { Pages, Preloader, ErrorFallback }
