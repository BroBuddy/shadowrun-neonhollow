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
    { path: '/midnight', icon: '🌙', text: 'Midnight' },
]

const MobileNav = () => {
    return (
        <nav className="z-40">
            {links.map((item: LinkType, index: number) => (
                <Link
                    key={index}
                    to={item.path}
                    className="flex flex-row text-center"
                >
                    <span className="text-md mr-1">{item.icon}</span>
                    <span className="text-xs">{item.text}</span>
                </Link>
            ))}
        </nav>
    )
}

export default MobileNav
