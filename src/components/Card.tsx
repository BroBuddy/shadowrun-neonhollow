type CardProps = {
    children: React.ReactNode
    className?: string
    role?: string
    ariaLabel?: string
}

const Card = ({ children, className = '', role, ariaLabel }: CardProps) => {
    return (
        <div
            className={`card z-0 ${className}`}
            role={role}
            aria-label={ariaLabel}
        >
            {children}
        </div>
    )
}

export default Card
