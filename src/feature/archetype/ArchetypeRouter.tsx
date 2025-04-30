import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const ArchetypeDetail = React.lazy(
    () => import('../archetype/pages/ArchetypeDetail')
)

const ArchetypeRouter = [
    {
        path: '/archetype',
        children: [
            {
                path: ':id',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <ArchetypeDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default ArchetypeRouter
