import Preloader from '@/components/Preloader'
import Error from '@/pages/Error'
import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const City = React.lazy(() => import('./pages/City'))
const MegaCorp = React.lazy(() => import('./pages/MegaCorp'))
const ZeroZone = React.lazy(() => import('./pages/ZeroZone'))
const CityDetail = React.lazy(() => import('./pages/CityDetail'))

import('./pages/City')
import('./pages/CityDetail')

const CityRouter = [
    {
        path: '/city',
        children: [
            {
                index: true,
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Preloader />}>
                            <City />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'megacorp',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Preloader />}>
                            <MegaCorp />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'zerozone',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Preloader />}>
                            <ZeroZone />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: ':tag',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Preloader />}>
                            <CityDetail />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
        ],
    },
]

export default CityRouter
