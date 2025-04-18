import { Outlet, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import MobileNav from './components/MobileNav'
import './App.css'

function App() {
    const location = useLocation()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <>
            <h1 className="logo">NeonHollow</h1>
            <Outlet />
            <MobileNav />
        </>
    )
}

export default App
