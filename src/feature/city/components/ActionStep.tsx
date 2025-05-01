import { ActionStep as ActionStepType } from '../FacilityType'
import { renderRoll2d6 } from '@/lib/helper'
import PopUp from '@/components/Popup'
import ResourceDetail from '@/feature/resource/pages/ResourceDetail'

type ActionStepProps = {
    step: ActionStepType
}

const ActionStep = ({ step }: ActionStepProps) => {
    return (
        <li>
            {step.tag ? (
                <>
                    <PopUp title={step.text}>
                        <ResourceDetail tag={step.tag} />
                    </PopUp>
                </>
            ) : (
                renderRoll2d6(step.text)
            )}
        </li>
    )
}

export default ActionStep
