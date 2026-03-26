import Preloader from '@/components/Preloader'
import { Suspense } from 'react'
import Rules from './pages/Rules'

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