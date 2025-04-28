import React, { Suspense } from 'react'
const BackgroundDetail = React.lazy(
    () => import('../background/pages/BackgroundDetail')
)

const LoadingFallback = () => <div>Loading...</div>

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
