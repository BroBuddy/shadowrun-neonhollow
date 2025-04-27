import React, { Suspense } from 'react'

const Rule = React.lazy(() => import('./pages/Rule'))
const RuleDetail = React.lazy(() => import('./pages/RuleDetail'))

const LoadingFallback = () => <div>Loading...</div>

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
                path: ':ruleId',
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
