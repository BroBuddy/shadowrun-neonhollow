import React, { Suspense } from 'react'
const MechanicDetail = React.lazy(
    () => import('../mechanic/pages/MechanicDetail')
)

const LoadingFallback = () => <div>Loading...</div>

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
