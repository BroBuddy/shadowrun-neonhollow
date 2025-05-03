import Card from '@/components/Card'
import { FacilityRoll } from '../FacilityType'
import Dice from '@/components/Dice'
import EventDetail from '@/feature/event/pages/EventDetail'
import PopUp from '@/components/Popup'
import EncounterView from '@/feature/encounter/components/EncounterView'
import useResourceStore from '@/feature/resource/store/resourceStore'

type FacilityRollsProps = {
    rollList: FacilityRoll[]
}

const RollsView = ({ rollList }: FacilityRollsProps) => {
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
                <a
                    className="cursor-pointer"
                    onClick={() => handleStepClick({ Energy: -1 })}
                >
                    Spend 1 Energy
                </a>
                <span>&#8594;</span>
                <span>Roll:</span>
                <Dice dice={2} />
            </div>
            <ul className="list-margin">
                {rollList.map((item: FacilityRoll, index: number) => (
                    <li key={index}>
                        <strong>Roll {item.roll}</strong> &#8594;{' '}
                        {item.roll === '7' ? (
                            <EncounterView />
                        ) : item.resource ? (
                            <>
                                <span>{item.text.split(' → ')[0]}</span>
                                <span className="mx-1">→</span>
                                <a
                                    className={
                                        item.resource ? 'cursor-pointer' : ''
                                    }
                                    onClick={
                                        item.resource
                                            ? () =>
                                                  handleStepClick(item.resource)
                                            : undefined
                                    }
                                >
                                    {item.text.split(' → ')[1]}
                                </a>
                            </>
                        ) : item.id ? (
                            <PopUp title={item.text}>
                                <EventDetail id={item.id} />
                            </PopUp>
                        ) : (
                            <>{item.text}</>
                        )}
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default RollsView
