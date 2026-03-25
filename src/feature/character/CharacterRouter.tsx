import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const Character = React.lazy(() => import('../character/pages/Character'))
const NameDetail = React.lazy(() => import('../character/pages/NameDetail'))

const CharacterRouter = [
    {
        path: '/character',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Preloader />}>
                        <Character />
                    </Suspense>
                ),
            },
        ],
    },
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

export default CharacterRouter
