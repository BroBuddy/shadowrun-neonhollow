import { Link, Outlet, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import MobileNav from './components/MobileNav'
import Booklet from './components/Booklet'
import Resources from './features/resource/Resources'
import './App.css'

const App = () => {
    const location = useLocation()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <>
            <div className="flex flex-col sticky top-0 bg-black w-full z-10 mb-3">
                <div className="w-full">
                    <Resources />
                </div>

                <div className="flex justify-between items-center w-full px-3">
                    <div className="flex">
                        <Link to="/R501">RM</Link>
                    </div>

                    <div className="flex justify-center w-3/4">
                        <Booklet />
                    </div>

                    <div className="flex">
                        <Link to="/R401">EM</Link>
                    </div>
                </div>
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
