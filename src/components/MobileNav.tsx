import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/R013">
                <span className="text-xs">Sheet</span>
            </Link>

            <Link to="/R101">
                <span className="text-xs">Town</span>
            </Link>

            <Link to="/R601">
                <span className="text-xs">Mission</span>
            </Link>
        </section>
    )
}

export default MobileNav
