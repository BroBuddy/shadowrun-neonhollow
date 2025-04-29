import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const EventDetail = React.lazy(() => import('../event/pages/EventDetail'))

const EventRouter = [
    {
        path: '/event',
        children: [
            {
                path: ':id',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <EventDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default EventRouter
