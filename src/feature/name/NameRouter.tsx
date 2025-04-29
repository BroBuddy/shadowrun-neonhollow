import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const NameDetail = React.lazy(() => import('../name/pages/NameDetail'))

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
