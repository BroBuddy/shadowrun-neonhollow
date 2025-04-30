import Card from '@/components/Card'
import { FacilityAction } from '../FacilityType'
import FadeIn from '@/components/FadeIn'
import ActionStep from './ActionStep'

type FacilityActionsProps = {
    actionList: FacilityAction[]
}

const ActionsView = ({ actionList }: FacilityActionsProps) => {
    return (
        <Card>
            <FadeIn>
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
            </FadeIn>
        </Card>
    )
}

export default ActionsView
