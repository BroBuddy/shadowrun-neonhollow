import { SkillCheck as SkillCheckType } from '../EventType'
import useResourceStore from '@/feature/resource/store/resourceStore'

type SkillCheckProps = {
    skillCheck: SkillCheckType
}

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
    <div className="mb-3">
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

const SkillCheck = ({ skillCheck }: SkillCheckProps) => {
    const modifyResources = useResourceStore((state) => state.modifyResources)

    const handleResultClick = (resource: { [key: string]: number }) => {
        modifyResources(resource)
    }

    return (
        <>
            <p>
                <strong>
                    {skillCheck.icon}
                    <span className="mx-1">{skillCheck.attribute}</span>
                    (DC {skillCheck.dc}):
                </strong>
            </p>
            <p>
                <span>
                    {skillCheck.description || 'No description available'}
                </span>
            </p>

            <SkillCheckResult
                icon="✅"
                text={skillCheck.success.text}
                resource={skillCheck.success.resource}
                onClick={handleResultClick}
            />
            <SkillCheckResult
                icon="❌"
                text={skillCheck.fail.text}
                resource={skillCheck.fail.resource}
                onClick={handleResultClick}
            />
        </>
    )
}

export default SkillCheck
