import { Outlet, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { useColorTheme } from './context/useColorTheme'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.scss'

function App() {
    const location = useLocation()
    const { isDefaultMode } = useColorTheme()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <div className={ isDefaultMode ? 'turquoise-mode' : 'violet-mode'}>
            <Header />
            <div className="pt-3">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default App
