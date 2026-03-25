type ArrowProps = {
    className?: string
}

const Arrow = ({ className }: ArrowProps) => (
    <span className={className}>&raquo;</span>
)

export default Arrow