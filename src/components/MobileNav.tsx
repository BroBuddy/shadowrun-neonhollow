import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <section className="mobile-nav">
            <Link to="/R013">
                <span className="text-xs">Sheet</span>
            </Link>

            <Link to="/R101">
                <span className="text-xs">City</span>
            </Link>

            <Link to="/M001">
                <span className="text-xs">Runs</span>
            </Link>
        </section>
    )
}

export default MobileNav
