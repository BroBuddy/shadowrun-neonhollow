import Card from '@/components/Card'
import { FacilityRoll } from '../FacilityType'
import Dice from '@/components/Dice'
import useResourceStore from '@/feature/resource/store/resourceStore'
import RollItem from './RollItem'

type FacilityRollsProps = {
    rollList: FacilityRoll[]
}

const RollView = ({ rollList }: FacilityRollsProps) => {
    const modifyResources = useResourceStore((state) => state.modifyResources)

    const handleStepClick = (resourceChange?: Record<string, number>) => {
        if (resourceChange) {
            modifyResources(resourceChange)
        }
    }

    return (
        <Card>
            <div className="flex items-center space-x-1">
                <strong>Enter:</strong>
                <span>&#8594;</span>
                <button
                    className="highlight font-bold"
                    aria-label="Spend 1 Energy"
                    onClick={() => handleStepClick({ Energy: -1 })}
                >
                    Spend 1 Energy
                </button>
                <span>&#8594;</span>
                <span>Roll:</span>
                <Dice dice={2} />
            </div>

            <ul className="list-margin">
                {rollList.map((item: FacilityRoll, index: number) => (
                    <RollItem
                        key={index}
                        item={item}
                        handleStepClick={handleStepClick}
                    />
                ))}
            </ul>
        </Card>
    )
}

export default RollView
