import React, { Suspense } from 'react'

const Resource = React.lazy(() => import('./pages/Resource'))
const ResourceDetail = React.lazy(() => import('./pages/ResourceDetail'))

const LoadingFallback = () => <div>Loading...</div>

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
                path: ':resourceTag',
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
