import React, { Suspense } from 'react'

const Rule = React.lazy(() => import('./pages/Rule'))
const Character = React.lazy(() => import('./pages/Character'))
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
                path: 'character',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Character />
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
