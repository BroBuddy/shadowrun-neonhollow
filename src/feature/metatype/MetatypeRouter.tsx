import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

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
                    <Suspense fallback={<Preloader />}>
                        <MetatypeDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default MetatypeRouter
