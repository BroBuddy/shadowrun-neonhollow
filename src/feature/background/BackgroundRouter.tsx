import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
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
                    <Suspense fallback={<LoadingFallback />}>
                        <BackgroundDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default BackgroundRouter
