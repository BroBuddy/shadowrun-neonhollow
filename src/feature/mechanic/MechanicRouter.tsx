import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

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
                    <Suspense fallback={<Preloader />}>
                        <MechanicDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default MechanicRouter
