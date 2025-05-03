import { ActionStep as ActionStepType } from '../FacilityType'
import { renderRoll2d6 } from '@/lib/helper'
import PopUp from '@/components/Popup'
import ResourceDetail from '@/feature/resource/pages/ResourceDetail'
import RunnerView from '@/feature/runner/components/RunnerView'
import useResourceStore from '@/feature/resource/store/resourceStore'

type ActionStepProps = {
    step: ActionStepType
}

const ActionStep = ({ step }: ActionStepProps) => {
    const modifyResources = useResourceStore((state) => state.modifyResources)

    const handleStepClick = (resourceChange?: Record<string, number>) => {
        if (resourceChange) {
            modifyResources(resourceChange)
        }
    }

    return (
        <li>
            {step.text === 'Random Runner' ? (
                <RunnerView />
            ) : step.resource ? (
                <>
                    <a
                        className={step.resource ? 'cursor-pointer' : ''}
                        onClick={
                            step.resource
                                ? () => handleStepClick(step.resource)
                                : undefined
                        }
                    >
                        {step.text}
                    </a>
                </>
            ) : step.tag ? (
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
