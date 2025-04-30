import { Outlet, useLocation } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import MobileNav from './components/MobileNav'
import Settings from './components/Settings'
import './App.scss'

function App() {
    const location = useLocation()
    const [isDefaultMode, setIsDefaultMode] = useState<boolean>(true)

    const toggleColorScheme = () => {
        setIsDefaultMode((prev) => !prev)
    }

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <div className={isDefaultMode ? 'turquoise-mode' : 'violet-mode'}>
            <Settings toggleColorScheme={toggleColorScheme} />
            <Outlet />
            <MobileNav />
        </div>
    )
}

export default App
