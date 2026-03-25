import { ActionStep as ActionStepType } from '../types/FacilityType'
import { renderRoll2d6 } from '@/lib/helper'
import PopUp from '@/components/Popup'
import ResourceDetail from '@/feature/resource/pages/ResourceDetail'
import RunnerView from '@/feature/runner/components/RunnerView'
import useResourceStore from '@/feature/resource/store/resourceStore'
import AttributeTraining from '@/feature/attribute/components/AttributeTraining'

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

        if (step.tag === 'attribute') {
            return <AttributeTraining attribute={step.text} />
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

    return <>{renderStepContent()}</>
}

export default ActionStep
