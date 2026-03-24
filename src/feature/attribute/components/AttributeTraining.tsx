import useAttributeStore from '../store/attributeStore'
import useResourceStore from '@/feature/resource/store/resourceStore'

type AttributeTrainingProps = {
    attribute: string
}

const AttributeTraining = ({ attribute }: AttributeTrainingProps) => {
    const attributes = useAttributeStore((state) => state.attributes)
    const modifyAttributes = useAttributeStore((state) => state.modifyAttributes)
    const karma = useResourceStore((state) => state.resources.Karma)
    const modifyResources = useResourceStore((state) => state.modifyResources)

    const [main] = attributes[attribute] ?? [0, 0]
    const cost = main + 1
    const canAfford = karma >= cost && main < 6

    const handleTrain = () => {
        if (!canAfford) return
        modifyResources({ Karma: -cost })
        modifyAttributes({ [attribute]: 1 })
    }

    return (
        <>
            <button
                onClick={handleTrain}
                disabled={!canAfford}
                className={`highlight font-bold ${canAfford ? 'cursor-pointer' : 'opacity-30 cursor-not-allowed'}`}
            >
                <span className='mr-1'>{attribute}</span>
                {main} <span>&#8594;</span> {main + 1}
                <span className='ml-1'>({cost} Karma)</span>
            </button>
        </>
    )
}

export default AttributeTraining