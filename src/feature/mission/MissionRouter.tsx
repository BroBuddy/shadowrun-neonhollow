import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

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
                    <Suspense fallback={<Preloader />}>
                        <Mission />
                    </Suspense>
                ),
            },
            {
                path: 'rules',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <MissionRules />
                    </Suspense>
                ),
            },
            {
                path: 'performance',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <MissionPerformance />
                    </Suspense>
                ),
            },
            {
                path: ':id',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <MissionDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default MissionRouter
