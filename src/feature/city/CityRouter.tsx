import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const City = React.lazy(() => import('./pages/City'))
const CityDetail = React.lazy(() => import('./pages/CityDetail'))

const CityRouter = [
    {
        path: '/city',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <City />
                    </Suspense>
                ),
            },
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <CityDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default CityRouter
