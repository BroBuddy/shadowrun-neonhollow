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
            <div className="z-0 content">
                <Outlet />
            </div>

            <div className="z-10">
                <MobileNav />
            </div>
        </>
    )
}

export default App
