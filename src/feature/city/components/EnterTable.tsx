import Card from '@/components/Card'
import { FacilityRoll } from '../types/FacilityType'
import Dice from '@/components/Dice'
import useResourceStore from '@/feature/resource/store/resourceStore'
import RollItem from './RollItem'
import Arrow from '@/components/Arrow'
import useAttributeStore from '@/feature/attribute/store/attributeStore'

type FacilityRollsProps = {
    rollList: FacilityRoll[]
}

const EnterTable = ({ rollList }: FacilityRollsProps) => {
    const modifyResources = useResourceStore((state) => state.modifyResources)
    const modifyAttributes = useAttributeStore((state) => state.modifyAttributes)

    const handleResourceStep = (resourceChange?: Record<string, number>) => {
        if (resourceChange) {
            modifyResources(resourceChange)
        }
    }

    const handleAttributeStep = (resourceChange?: Record<string, number>) => {
        if (resourceChange) {
            modifyAttributes(resourceChange)
        }
    }  

    return (
        <Card>
            <div className="flex items-center space-x-1">
                <strong>Enter:</strong>
                <Arrow />
                <button
                    className="highlight font-bold"
                    aria-label="Spend 1 Energy"
                    onClick={() => handleResourceStep({ Energy: -1 })}
                >
                    Spend 1 Energy
                </button>
                <Arrow />
                <span>Roll</span>
                <Dice dice={2} />
            </div>

            <ul className="list-margin">
                {rollList.map((item: FacilityRoll, index: number) => (
                    <RollItem
                        key={index}
                        item={item}
                        handleResourceStep={handleResourceStep}
                        handleAttributeStep={handleAttributeStep}
                    />
                ))}
            </ul>
        </Card>
    )
}

export default EnterTable
