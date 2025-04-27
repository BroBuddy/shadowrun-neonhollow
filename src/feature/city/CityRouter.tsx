import React, { Suspense } from 'react'

const City = React.lazy(() => import('./pages/City'))
const CityDetail = React.lazy(() => import('./pages/CityDetail'))

const LoadingFallback = () => <p>Loading...</p>

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
                path: ':facilityTag',
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
