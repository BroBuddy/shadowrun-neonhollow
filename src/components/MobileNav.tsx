import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/">
                <span className="text-xs">Booklet</span>
            </Link>

            <Link to="/M001">
                <span className="text-xs">Mr. Johnson</span>
            </Link>

            <Link to="/T001">
                <span className="text-xs">NeonHollow</span>
            </Link>

            <Link to="/C001">
                <span className="text-xs">Character</span>
            </Link>
        </section>
    )
}

export default MobileNav
