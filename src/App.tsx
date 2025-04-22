import { Link, Outlet, useLocation } from 'react-router-dom'
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
            <div className="flex sticky top-0 bg-black justify-between items-center px-3 z-10">
                <Link to="/N001" className="mt-3">
                    RM
                </Link>

                <div className="mt-3 justify-items-center">
                    <Link to="/R001">
                        <img src="/images/Logo.png" alt="Logo" />
                    </Link>
                </div>

                <Link to="/E001" className="mt-3">
                    EM
                </Link>
            </div>

            <div className="z-0">
                <Outlet />
            </div>

            <div className="z-10">
                <MobileNav />
            </div>
        </>
    )
}

export default App
