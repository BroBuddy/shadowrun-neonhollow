import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const Event = React.lazy(() => import('../event/pages/Event'))
const EventDetail = React.lazy(() => import('../event/pages/EventDetail'))

const EventRouter = [
    {
        path: '/event',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Preloader />}>
                        <Event />
                    </Suspense>
                ),
            },
            {
                path: ':id',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <EventDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default EventRouter
