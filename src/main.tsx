import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ColorSchemeProvider } from './context/ColorSchemeProvider.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { register } from './serviceWorkerRegistration.ts'
import ResourceRouter from './feature/resource/ResourceRouter.tsx'
import CityRouter from './feature/city/CityRouter.tsx'
import MissionRouter from './feature/mission/MissionRouter.tsx'
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
}

import('./pages/Welcome')
import('./pages/Rules')
import('./pages/Midnight')

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
            ...MechanicRouter,
            ...CharacterRouter,
            ...MetatypeRouter,
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
