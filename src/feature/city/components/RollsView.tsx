import Card from '@/components/Card'
import { FacilityRoll } from '../FacilityType'
import Dice from '@/components/Dice'
import EventDetail from '@/feature/event/pages/EventDetail'
import PopUp from '@/components/Popup'
import EncounterView from '@/feature/encounter/components/EncounterView'

type FacilityRollsProps = {
    rollList: FacilityRoll[]
}

const RollsView = ({ rollList }: FacilityRollsProps) => {
    return (
        <Card>
            <div className="flex items-center space-x-1">
                <strong className="highlight">Enter:</strong>
                <span>&#8594;</span>
                <strong>SPEND:</strong>
                <span>1 Energy</span>
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
