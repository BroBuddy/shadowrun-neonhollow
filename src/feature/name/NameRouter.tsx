import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const NameDetail = React.lazy(() => import('../name/pages/NameDetail'))

const NameRouter = [
    {
        path: '/name',
        children: [
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <NameDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default NameRouter
