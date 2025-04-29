import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const Rule = React.lazy(() => import('./pages/Rule'))
const RuleDetail = React.lazy(() => import('./pages/RuleDetail'))

const RuleRouter = [
    {
        path: '/rule',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Preloader />}>
                        <Rule />
                    </Suspense>
                ),
            },
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<Preloader />}>
                        <RuleDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default RuleRouter
