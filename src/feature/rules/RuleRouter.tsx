import Preloader from '@/components/Preloader'
import { Suspense } from 'react'
import Rules from './pages/Rules'
import { Outlet } from 'react-router-dom'

const RuleRouter = [
    {
        path: '/rules',
        element: (
            <Suspense fallback={<Preloader />}>
                <Outlet />
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: <Rules />
            },
        ],
    },
]

export default RuleRouter
