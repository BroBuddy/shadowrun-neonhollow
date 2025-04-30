import { SkillCheck as SkillCheckType } from '../EventType'

type SkillCheckProps = {
    skillCheck: SkillCheckType
    isAlternative?: boolean
}

const SkillCheck = ({ skillCheck, isAlternative }: SkillCheckProps) => {
    return (
        <div>
            <p>
                <strong className="highlight">
                    {skillCheck.icon} {skillCheck.attribute} (DC {skillCheck.dc}
                    ):
                </strong>
            </p>

            <p>{skillCheck.description}</p>
            <ul className="list-margin">
                <li>Roll 2d6 &#8594; Add {skillCheck.attribute}</li>
                <li>Success? &#8594; {skillCheck.success}</li>
                <li>Fail? &#8594; {skillCheck.fail}</li>
            </ul>

            {isAlternative && (
                <div className="mb-5 flex justify-center items-center">
                    <span className="text-2xl mr-2">&#8595;</span>
                    <span className="mt-1">Alternative</span>
                </div>
            )}
        </div>
    )
}

export default SkillCheck
