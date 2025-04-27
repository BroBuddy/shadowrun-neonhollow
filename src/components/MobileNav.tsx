import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/rules">
                <span className="text-xs">📑 Rules</span>
            </Link>

            <Link to="/city">
                <span className="text-xs">🏠 City</span>
            </Link>

            <Link to="/mission">
                <span className="text-xs">🎯 Mission</span>
            </Link>

            <Link to="/matrix">
                <span className="text-xs">🎲 Matrix</span>
            </Link>
        </section>
    )
}

export default MobileNav
