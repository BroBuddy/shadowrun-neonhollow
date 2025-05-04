import { ActionStep as ActionStepType, FacilityAction } from '../FacilityType'

import ActionStep from './ActionStep'

type ActionItemProps = {
    action: FacilityAction
}

const ActionItem = ({ action }: ActionItemProps) => (
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

export default ActionItem
