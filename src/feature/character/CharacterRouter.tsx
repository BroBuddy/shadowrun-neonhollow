import React, { Suspense } from 'react'

const Character = React.lazy(() => import('../character/pages/Character'))

const LoadingFallback = () => <div>Loading...</div>

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
