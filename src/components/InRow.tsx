type InRowProps = {
    children: React.ReactNode
}

function InRow({ children }: InRowProps) {
    return <div className="flex items-center space-x-1">{children}</div>
}

export default InRow
