import { Link } from 'react-router-dom'
import { ActionStep as ActionStepType } from '../FacilityType'

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
                <>
                    <strong>{firstWord}:</strong> {remainingWords.join(' ')}
                </>
            )}
        </li>
    )
}

export default ActionStep
