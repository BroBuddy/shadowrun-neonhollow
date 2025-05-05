import PopUp from '@/components/Popup'
import InRow from '@/components/InRow'
import Dice from '@/components/Dice'
import ResourceDetail from '@/feature/resource/pages/ResourceDetail'
import MissionRules from '../pages/MissionRules'
import Card from '@/components/Card'
import useResourceStore from '@/feature/resource/store/resourceStore'

const MissionInstruction = () => {
    const modifyResources = useResourceStore((state) => state.modifyResources)

    const handleStepClick = (resourceChange?: Record<string, number>) => {
        if (resourceChange) {
            modifyResources(resourceChange)
        }
    }
    return (
        <Card>
            <div className="mb-4">
                Before your run begins
                <span className="mx-1">&#8594;</span>
                <PopUp title="Mission Rules">
                    <MissionRules />
                </PopUp>
            </div>
            <p>
                <strong>Accept a mission:</strong>
            </p>
            <ol className="list-margin">
                <li>
                    <a
                        className="cursor-pointer"
                        onClick={() => handleStepClick({ Intel: -3 })}
                    >
                        Spend 3 Intel
                    </a>{' '}
                    &#8594; Negotiate hazard pay
                </li>
                <li>
                    <InRow>
                        <span>Roll</span>
                        <Dice dice={2} />
                        <span>&#8594;</span>
                        <span>Add Charisma</span>
                    </InRow>
                </li>
                <li>
                    <PopUp title="Gain Nuyen">
                        <ResourceDetail tag="nuyen" />
                    </PopUp>
                </li>
            </ol>
        </Card>
    )
}

export default MissionInstruction
