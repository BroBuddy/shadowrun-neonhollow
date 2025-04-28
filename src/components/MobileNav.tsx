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
            {links.map((item: LinkType, index: number) => (
                <Link key={index} to={item.path}>
                    <span className="text-xs">
                        {item.icon} {item.text}
                    </span>
                </Link>
            ))}
        </nav>
    )
}

export default MobileNav
