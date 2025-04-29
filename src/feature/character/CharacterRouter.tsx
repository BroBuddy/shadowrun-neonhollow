import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const Character = React.lazy(() => import('../character/pages/Character'))

const CharacterRouter = [
    {
        path: '/character',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Character />
                    </Suspense>
                ),
            },
        ],
    },
]

export default CharacterRouter
