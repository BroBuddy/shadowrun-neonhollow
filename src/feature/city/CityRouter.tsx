import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const City = React.lazy(() => import('./pages/City'))
const CityDetail = React.lazy(() => import('./pages/CityDetail'))

const CityRouter = [
    {
        path: '/city',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Preloader />}>
                        <City />
                    </Suspense>
                ),
            },
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <CityDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default CityRouter
