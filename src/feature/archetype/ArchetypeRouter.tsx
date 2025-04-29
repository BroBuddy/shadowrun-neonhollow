import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const ArchetypeDetail = React.lazy(
    () => import('../archetype/pages/ArchetypeDetail')
)

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
