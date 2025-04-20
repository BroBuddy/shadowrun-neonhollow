import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/R002">
                <span className="text-xs">Character</span>
            </Link>

            <Link to="/T001">
                <span className="text-xs">NeonHollow</span>
            </Link>

            <Link to="/M001">
                <span className="text-xs">Mr. Johnson</span>
            </Link>
        </section>
    )
}

export default MobileNav
