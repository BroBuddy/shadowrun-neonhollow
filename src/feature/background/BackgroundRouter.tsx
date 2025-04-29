import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const BackgroundDetail = React.lazy(
    () => import('../background/pages/BackgroundDetail')
)

const BackgroundRouter = [
    {
        path: '/background',
        children: [
            {
                path: ':id',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <BackgroundDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default BackgroundRouter
