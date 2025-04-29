import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const Resource = React.lazy(() => import('./pages/Resource'))
const ResourceDetail = React.lazy(() => import('./pages/ResourceDetail'))

const ResourceRouter = [
    {
        path: '/resource',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Resource />
                    </Suspense>
                ),
            },
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <ResourceDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default ResourceRouter
