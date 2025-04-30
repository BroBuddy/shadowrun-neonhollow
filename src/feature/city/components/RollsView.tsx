import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { FacilityRoll } from '../FacilityType'
import FadeIn from '@/components/FadeIn'
import Dice from '@/components/Dice'

type FacilityRollsProps = {
    rollList: FacilityRoll[]
}

const RollsView = ({ rollList }: FacilityRollsProps) => {
    return (
        <Card>
            <FadeIn>
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
                            {item.link ? (
                                <Link to={`/event${item.link}`}>
                                    {item.text}
                                </Link>
                            ) : (
                                <>{item.text}</>
                            )}
                        </li>
                    ))}
                </ul>
            </FadeIn>
        </Card>
    )
}

export default RollsView
