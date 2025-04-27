import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { ActionStep, FacilityAction } from '../FacilityType'

type FacilityActionsProps = {
    actionList: FacilityAction[]
}

const FacilityActions = ({ actionList }: FacilityActionsProps) => {
    return (
        <Card>
            {actionList.map((action, actionIndex) => (
                <div key={actionIndex}>
                    <p>
                        <strong className="highlight">{action.title}</strong>
                    </p>
                    <ul className="list-margin">
                        {action.steps.map(
                            (step: ActionStep, stepIndex: number) => {
                                const [firstWord, ...remainingWords] =
                                    step.text.split(' ')

                                return (
                                    <li key={stepIndex}>
                                        {step.link ? (
                                            <>
                                                <strong>{firstWord}:</strong>{' '}
                                                <Link
                                                    to={`/resource${step.link}`}
                                                >
                                                    {remainingWords.join(' ')}
                                                </Link>
                                            </>
                                        ) : (
                                            <>
                                                <strong>{firstWord}:</strong>{' '}
                                                {remainingWords.join(' ')}
                                            </>
                                        )}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>
            ))}
        </Card>
    )
}

export default FacilityActions
