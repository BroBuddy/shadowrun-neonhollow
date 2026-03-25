const SkillCheckResult = ({
    icon,
    text,
    resource,
    onClick,
}: {
    icon: string
    text: string
    resource: { [key: string]: number }
    onClick: (resource: { [key: string]: number }) => void
}) => (
    <div className="my-1">
        <span className="mx-1">{icon}</span>
        <button
            className="cursor-pointer font-bold highlight"
            onClick={() => onClick(resource)}
            role="button"
            aria-label={`Trigger resource modification: ${text}`}
        >
            {text}
        </button>
    </div>
)

export default SkillCheckResult
