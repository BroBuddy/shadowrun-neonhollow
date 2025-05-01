import Card from '@/components/Card'
import { ActionStep as ActionStepType, FacilityAction } from '../FacilityType'
import ActionStep from './ActionStep'

type FacilityActionsProps = {
    actionList: FacilityAction[]
}

const ActionsView = ({ actionList }: FacilityActionsProps) => {
    return (
        <Card>
            {actionList.map((item: FacilityAction, actionIndex: number) => (
                <div key={actionIndex}>
                    <p>
                        <strong className="highlight">{item.title}</strong>
                    </p>
                    <ul className="list-margin">
                        {item.steps.map(
                            (step: ActionStepType, stepIndex: number) => (
                                <ActionStep key={stepIndex} step={step} />
                            )
                        )}
                    </ul>
                </div>
            ))}
        </Card>
    )
}

export default ActionsView
