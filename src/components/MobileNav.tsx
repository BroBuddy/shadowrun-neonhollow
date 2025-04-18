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

            <Link to="/character">
                <span className="text-xs">Character</span>
            </Link>

            <Link to="/mission">
                <span className="text-xs">Mission</span>
            </Link>
        </section>
    )
}

export default MobileNav
