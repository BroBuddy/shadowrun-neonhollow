import Card from '@/components/Card'
import { ActionStep as ActionStepType, FacilityAction } from '../FacilityType'
import ActionStep from './ActionStep'

type FacilityActionsProps = {
    actionList: FacilityAction[]
}

const ActionsView = ({ actionList }: FacilityActionsProps) => {
    if (!actionList || actionList.length === 0) {
        return <p>No actions available.</p>
    }

    return (
        <Card>
            {actionList.map((action: FacilityAction, actionIndex: number) => (
                <FacilityActionItem key={actionIndex} action={action} />
            ))}
        </Card>
    )
}

type FacilityActionItemProps = {
    action: FacilityAction
}

const FacilityActionItem = ({ action }: FacilityActionItemProps) => (
    <div>
        <p>
            <strong>{action.title}</strong>
        </p>
        <ul className="list-margin">
            {action.steps.map((step: ActionStepType, stepIndex: number) => (
                <ActionStep key={stepIndex} step={step} />
            ))}
        </ul>
    </div>
)

export default ActionsView
