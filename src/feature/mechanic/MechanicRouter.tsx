import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const MechanicDetail = React.lazy(
    () => import('../mechanic/pages/MechanicDetail')
)

const MechanicRouter = [
    {
        path: '/mechanic',
        children: [
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <MechanicDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default MechanicRouter
