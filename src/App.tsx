import { Outlet, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import MobileNav from './components/MobileNav'
import { useColorScheme } from './context/useColorScheme'
import Header from './components/Header'
import './App.scss'

function App() {
    const location = useLocation()
    const { isDefaultMode } = useColorScheme()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <div className={isDefaultMode ? 'turquoise-mode' : 'violet-mode'}>
            <Header />
            <Outlet />
            <MobileNav />
        </div>
    )
}

export default App
