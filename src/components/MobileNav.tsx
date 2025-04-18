import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/">
                <span className="text-xs">Booklet</span>
            </Link>

            <Link to="/mission">
                <span className="text-xs">Mission</span>
            </Link>

            <Link to="/town">
                <span className="text-xs">Town</span>
            </Link>

            <Link to="/C001">
                <span className="text-xs">Character</span>
            </Link>
        </section>
    )
}

export default MobileNav
