import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const Rules = React.lazy(() => import('./pages/Rules'))

const RuleRouter = [
    {
        path: '/rules',
        element: (
            <Suspense fallback={<Preloader />}>
                <Rules />
            </Suspense>
        ),
    },
]

export default RuleRouter