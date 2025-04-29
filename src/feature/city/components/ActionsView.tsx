import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { ActionStep, FacilityAction } from '../FacilityType'

type FacilityActionsProps = {
    actionList: FacilityAction[]
}

const ActionsView = ({ actionList }: FacilityActionsProps) => {
    return (
        <Card dice={2}>
            {actionList.map((item: FacilityAction, actionIndex: number) => (
                <div key={actionIndex}>
                    <p>
                        <strong className="highlight">{item.title}</strong>
                    </p>
                    <ul className="list-margin">
                        {item.steps.map(
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

export default ActionsView
