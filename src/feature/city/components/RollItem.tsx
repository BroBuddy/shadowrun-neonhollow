import PopUp from '@/components/Popup'
import EventDetail from '@/feature/event/pages/EventDetail'
import { FacilityRoll } from '../types/FacilityType'
import Arrow from '@/components/Arrow'

type RollItemProps = {
    item: FacilityRoll
    handleStepClick: (resourceChange?: Record<string, number>) => void
}

const RollItem = ({ item, handleStepClick }: RollItemProps) => (
    <li>
        <strong>Roll {item.roll}</strong> <Arrow className='mr-1' />
        {item.roll === '7' ? (
            <>No Effect</>
        ) : item.resource ? (
            <>
                <span>{item.text.split(' → ')[0]}</span>
                <Arrow className='mx-1' />
                <button
                    className="cursor-pointer font-bold highlight"
                    onClick={() => handleStepClick(item.resource)}
                >
                    {item.text.split(' → ')[1]}
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
