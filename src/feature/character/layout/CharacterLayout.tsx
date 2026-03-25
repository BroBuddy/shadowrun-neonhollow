import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Preloader from '@/components/Preloader'

const CharacterLayout = () => (
    <Suspense fallback={<Preloader />}>
        <Outlet />
    </Suspense>
)

export default CharacterLayout