import React, { Suspense } from 'react'
const MetatypeDetail = React.lazy(
    () => import('../metatype/pages/MetatypeDetail')
)

const LoadingFallback = () => <div>Loading...</div>

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
