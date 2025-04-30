import InRow from '@/components/InRow'
import { SkillCheck as SkillCheckType } from '../EventType'
import Dice from '@/components/Dice'

type SkillCheckProps = {
    skillCheck: SkillCheckType
}

const SkillCheck = ({ skillCheck }: SkillCheckProps) => {
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
                <li>
                    <InRow>
                        <span>Roll</span> <Dice dice={2} /> <span>&#8594;</span>{' '}
                        <span>Add {skillCheck.attribute}</span>
                    </InRow>
                </li>
                <li>
                    <strong>Success?</strong> &#8594; {skillCheck.success}
                </li>
                <li>
                    <strong>Fail?</strong> &#8594; {skillCheck.fail}
                </li>
            </ul>
        </div>
    )
}

export default SkillCheck
