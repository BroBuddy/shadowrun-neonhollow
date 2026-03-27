import PopUp from '@/components/Popup'
import EventDetail from '@/feature/event/pages/EventDetail'
import { FacilityRoll } from '../types/FacilityType'
import Arrow from '@/components/Arrow'
import RunnerView from '@/feature/runner/components/RunnerView'

type RollItemProps = {
    item: FacilityRoll
    handleResourceStep: (resourceChange?: Record<string, number>) => void
    handleAttributeStep: (resourceChange?: Record<string, number>) => void
}

const RollItem = ({ item, handleResourceStep, handleAttributeStep }: RollItemProps) => (
    <li>
        <strong>Roll {item.roll}</strong> <Arrow className='mr-1' />
        {item.roll === '7' ? (
            <>You meet <Arrow /> <RunnerView /></>
        ) : item.resource ? (
            <>
                <span>{item.text.split(' | ')[0]}</span>
                <Arrow className='mx-1' />
                <button
                    className="cursor-pointer font-bold highlight"
                    onClick={() => handleResourceStep(item.resource)}
                >
                    {item.text.split(' | ')[1]}
                </button>
            </>
        ) : item.attribute ? (
            <>
                <span>{item.text.split(' | ')[0]}</span>
                <Arrow className='mx-1' />
                <button
                    className="cursor-pointer font-bold highlight"
                    onClick={() => handleAttributeStep(item.attribute)}
                >
                    {item.text.split(' | ')[1]}
                </button>
            </>
        ) : item.id ? (
            <PopUp title={item.text}>
                <EventDetail id={item.id} />
            </PopUp>
        ) : (
            <>{item.text}</>
        )}
    </li>
)

export default RollItem
