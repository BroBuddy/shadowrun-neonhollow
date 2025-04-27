import { Link } from 'react-router-dom'

type LinkType = {
    path: string
    icon: string
    text: string
}

const links: LinkType[] = [
    { path: '/rule', icon: '📑', text: 'Rules' },
    { path: '/city', icon: '🏠', text: 'City' },
    { path: '/mission', icon: '🎯', text: 'Mission' },
    { path: '/matrix', icon: '🎲', text: 'Matrix' },
]

const MobileNav = () => {
    return (
        <nav>
            {links.map((link: LinkType, index: number) => (
                <Link key={index} to={link.path}>
                    <span className="text-xs">
                        {link.icon} {link.text}
                    </span>
                </Link>
            ))}
        </nav>
    )
}

export default MobileNav
