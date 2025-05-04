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

    const renderStepContent = () => {
        if (step.text === 'Random Runner') {
            return <RunnerView />
        }

        if (step.resource) {
            return (
                <button
                    className="cursor-pointer font-bold highlight"
                    onClick={() => handleStepClick(step.resource)}
                >
                    {step.text}
                </button>
            )
        }

        if (step.tag) {
            return (
                <PopUp title={step.text}>
                    <ResourceDetail tag={step.tag} />
                </PopUp>
            )
        }

        return renderRoll2d6(step.text)
    }

    return <li>{renderStepContent()}</li>
}

export default ActionStep
