import { Link } from 'react-router-dom'
import { ActionStep as ActionStepType } from '../FacilityType'
import { renderRoll2d6 } from '@/lib/helper'

type ActionStepProps = {
    step: ActionStepType
}

const ActionStep = ({ step }: ActionStepProps) => {
    const [firstWord, ...remainingWords] = step.text.split(' ')

    return (
        <li>
            {step.link ? (
                <>
                    <strong>{firstWord}:</strong>{' '}
                    <Link to={`/resource${step.link}`}>
                        {remainingWords.join(' ')}
                    </Link>
                </>
            ) : (
                renderRoll2d6(step.text)
            )}
        </li>
    )
}

export default ActionStep
