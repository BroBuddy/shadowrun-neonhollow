import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { FacilityRoll } from '../FacilityType'
import Dice from '@/components/Dice'

type FacilityRollsProps = {
    rollList: FacilityRoll[]
}

const RollsView = ({ rollList }: FacilityRollsProps) => {
    return (
        <Card>
            <p className="flex items-center space-x-1">
                <strong className="highlight">
                    Enter &#8594; -1 Energy &#8594; Roll 2d6:
                </strong>
                <Dice min={1} max={6} />
                <Dice min={1} max={6} />
            </p>
            <ul className="list-margin">
                {rollList.map((item: FacilityRoll, index: number) => (
                    <li key={index}>
                        <strong>Roll {item.roll}</strong> &#8594;{' '}
                        {item.link ? (
                            <Link to={`/event${item.link}`}>{item.text}</Link>
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
