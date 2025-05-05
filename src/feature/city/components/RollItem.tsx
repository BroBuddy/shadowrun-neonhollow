import PopUp from '@/components/Popup'
import EventDetail from '@/feature/event/pages/EventDetail'
import { FacilityRoll } from '../FacilityType'

type RollItemProps = {
    item: FacilityRoll
    handleStepClick: (resourceChange?: Record<string, number>) => void
}

const RollItem = ({ item, handleStepClick }: RollItemProps) => (
    <li>
        <strong>Roll {item.roll}</strong> &#8594;{' '}
        {item.roll === '7' ? (
            <>No Effect</>
        ) : item.resource ? (
            <>
                <span>{item.text.split(' → ')[0]}</span>
                <span className="mx-1">→</span>
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
