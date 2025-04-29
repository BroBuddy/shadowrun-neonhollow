import React, { Suspense } from 'react'
const EventDetail = React.lazy(() => import('../event/pages/EventDetail'))

const LoadingFallback = () => <div>Loading...</div>

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
