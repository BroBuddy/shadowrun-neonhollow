import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const Mission = React.lazy(() => import('./pages/Mission'))
const ExtractionDetail = React.lazy(() => import('./pages/MissionDetail'))

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
                path: ':id',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <ExtractionDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default MissionRouter
