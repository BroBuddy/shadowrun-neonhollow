import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/sheet">
                <span className="text-xs">📑 Sheet</span>
            </Link>

            <Link to="/city">
                <span className="text-xs">🏠 City</span>
            </Link>

            <Link to="/R601">
                <span className="text-xs">🎯 Mission</span>
            </Link>

            <Link to="/R401">
                <span className="text-xs">🎲 EM</span>
            </Link>
        </section>
    )
}

export default MobileNav
