import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const MetatypeDetail = React.lazy(
    () => import('../metatype/pages/MetatypeDetail')
)

const MetatypeRouter = [
    {
        path: '/metatype',
        children: [
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <MetatypeDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default MetatypeRouter
