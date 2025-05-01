import Card from '@/components/Card'
import { FacilityAction } from '../FacilityType'
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
                        {item.steps.map((step, stepIndex) => (
                            <ActionStep key={stepIndex} step={step} />
                        ))}
                    </ul>
                </div>
            ))}
        </Card>
    )
}

export default ActionsView
