import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ColorSchemeProvider } from './context/ColorSchemeProvider.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { register } from './serviceWorkerRegistration.ts'
import ResourceRouter from './feature/resource/ResourceRouter.tsx'
import CityRouter from './feature/city/CityRouter.tsx'
import MissionRouter from './feature/mission/MissionRouter.tsx'
import ArchetypeRouter from './feature/archetype/ArchetypeRouter.tsx'
import NameRouter from './feature/name/NameRouter.tsx'
import MetatypeRouter from './feature/metatype/MetatypeRouter.tsx'
import MechanicRouter from './feature/mechanic/MechanicRouter.tsx'
import CharacterRouter from './feature/character/CharacterRouter'
import Preloader from './components/Preloader.tsx'
import Error from './pages/Error.tsx'
import App from './App.tsx'

const Pages = {
    Welcome: React.lazy(() => import('./pages/Welcome')),
    Rules: React.lazy(() => import('./pages/Rules')),
    Midnight: React.lazy(() => import('./pages/Midnight')),
    WellDone: React.lazy(() => import('./pages/WellDone')),
    OverwhelminglyGreat: React.lazy(
        () => import('./pages/OverwhelminglyGreat')
    ),
}

import('./pages/Welcome')
import('./pages/Rules')
import('./pages/Midnight')
import('./pages/WellDone')
import('./pages/OverwhelminglyGreat')

const router = createBrowserRouter([
    {
        index: true,
        element: (
            <Suspense fallback={<Preloader />}>
                <Pages.Welcome />
            </Suspense>
        ),
    },
    {
        element: (
            <ErrorBoundary fallback={<Error />}>
                <ColorSchemeProvider>
                    <App />
                </ColorSchemeProvider>
            </ErrorBoundary>
        ),
        children: [
            {
                path: '/rules',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <Pages.Rules />
                    </Suspense>
                ),
            },
            {
                path: '/midnight',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <Pages.Midnight />
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
            ...MechanicRouter,
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

register()

export { Preloader }
