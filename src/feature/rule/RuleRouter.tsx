import Preloader from '@/components/Preloader'
import React, { Suspense } from 'react'

const LoadingFallback = () => <Preloader />
const Rule = React.lazy(() => import('./pages/Rule'))
const RuleDetail = React.lazy(() => import('./pages/RuleDetail'))

const RuleRouter = [
    {
        path: '/rule',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Rule />
                    </Suspense>
                ),
            },
            {
                path: ':tag',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <RuleDetail />
                    </Suspense>
                ),
            },
        ],
    },
]

export default RuleRouter
