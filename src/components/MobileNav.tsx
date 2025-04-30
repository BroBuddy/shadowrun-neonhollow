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
    { path: '/event', icon: '⚠️', text: 'Event' },
]

const MobileNav = () => {
    return (
        <nav className="z-40">
            {links.map((item: LinkType, index: number) => (
                <Link
                    key={index}
                    to={item.path}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <span className="text-md">{item.icon}</span>
                    <span className="text-xs">{item.text}</span>
                </Link>
            ))}
        </nav>
    )
}

export default MobileNav
