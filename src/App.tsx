import { Outlet, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import MobileNav from './components/MobileNav'
import BurgerMenu from './components/BurgerMenu'
import './App.css'

function App() {
    const location = useLocation()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <>
            <BurgerMenu />
            <Outlet />
            <MobileNav />
        </>
    )
}

export default App
