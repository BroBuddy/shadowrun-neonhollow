import React, { Suspense } from 'react'
const ArchetypeDetail = React.lazy(
    () => import('../archetype/pages/ArchetypeDetail')
)

const LoadingFallback = () => <div>Loading...</div>

const ArchetypeRouter = [
    {
        path: '/archetype',
        children: [
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <ArchetypeDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default ArchetypeRouter
