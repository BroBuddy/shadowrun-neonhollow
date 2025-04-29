import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const Mission = React.lazy(() => import('./pages/Mission'))
const MissionDetail = React.lazy(() => import('./pages/MissionDetail'))
const MissionPerformance = React.lazy(
    () => import('./pages/MissionPerformance')
)
const MissionRules = React.lazy(() => import('./pages/MissionRules'))

const MissionRouter = [
    {
        path: '/mission',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Mission />
                    </Suspense>
                ),
            },
            {
                path: 'rules',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <MissionRules />
                    </Suspense>
                ),
            },
            {
                path: 'performance',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <MissionPerformance />
                    </Suspense>
                ),
            },
            {
                path: ':id',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <MissionDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default MissionRouter
