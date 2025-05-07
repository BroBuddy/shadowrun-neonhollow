import { Link } from 'react-router-dom'

type LinkType = {
    path: string
    icon: string
    text: string
}

const links: Array<LinkType> = [
    { path: '/rules', icon: '📑', text: 'Rules' },
    { path: '/city', icon: '🏠', text: 'City' },
    { path: '/mission', icon: '🎯', text: 'Mission' },
    { path: '/midnight', icon: '🌙', text: 'Midnight' },
]

const MobileNav = () => {
    return (
        <nav role="navigation" aria-label="Mobile Navigation">
            {links.map((item: LinkType) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className="flex flex-row text-center"
                    aria-label={`Navigate to ${item.text}`}
                >
                    <span className="text-md mr-1">{item.icon}</span>
                    <span className="text-xs">{item.text}</span>
                </Link>
            ))}
        </nav>
    )
}

export default MobileNav
