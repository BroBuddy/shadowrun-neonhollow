type InRowProps = {
    children: React.ReactNode
    role?: string
    ariaLabel?: string
}

const InRow: React.FC<InRowProps> = ({ children, role, ariaLabel }) => {
    return (
        <div
            className="flex items-center space-x-1"
            role={role}
            aria-label={ariaLabel}
        >
            {children}
        </div>
    )
}

export default InRow
