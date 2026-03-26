import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ColorThemeProvider } from './context/ColorThemeProvider.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { register } from './serviceWorkerRegistration.ts'
import CityRouter from './feature/city/CityRouter.tsx'
import MissionRouter from './feature/mission/MissionRouter.tsx'
import CharacterRouter from './feature/character/CharacterRouter'
import Preloader from './components/Preloader.tsx'
import Error from './pages/Error.tsx'
import App from './App.tsx'
import RuleRouter from './feature/rules/RuleRouter.tsx'

const Pages = {
    Welcome: React.lazy(() => import('./pages/Welcome')),
    Midnight: React.lazy(() => import('./pages/Midnight')),
}

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
                <ColorThemeProvider>
                    <App />
                </ColorThemeProvider>
            </ErrorBoundary>
        ),
        children: [
            {
                path: '/midnight',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <Pages.Midnight />
                    </Suspense>
                ),
            },
            ...CharacterRouter,
            ...RuleRouter,
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
