import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import { SkillCheck as SkillCheckType } from '../EventType'

type SkillCheckProps = {
    skillCheck: SkillCheckType
}

const SkillCheck = ({ skillCheck }: SkillCheckProps) => {
    return (
        <>
            <p>
                {skillCheck.icon}{' '}
                <span className="highlight">{skillCheck.description}</span>
            </p>

            <ul className="list-margin">
                <li>
                    <InRow>
                        <span>Roll:</span>
                        <Dice dice={2} />
                        <span>&#8594;</span>
                        <strong>
                            {skillCheck.attribute} (DC {skillCheck.dc}
                            ):
                        </strong>
                    </InRow>
                </li>
                <li>
                    <span>✅</span>
                    <span>{skillCheck.success}</span>
                </li>
                <li>
                    <span>❌</span>
                    <span>{skillCheck.fail}</span>
                </li>
            </ul>
        </>
    )
}

export default SkillCheck
