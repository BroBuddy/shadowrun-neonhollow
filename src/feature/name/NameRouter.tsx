import React, { Suspense } from 'react'
const NameDetail = React.lazy(() => import('../name/pages/NameDetail'))

const LoadingFallback = () => <div>Loading...</div>

const NameRouter = [
    {
        path: '/name',
        children: [
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <NameDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default NameRouter
