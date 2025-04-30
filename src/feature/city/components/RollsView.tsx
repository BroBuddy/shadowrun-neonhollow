import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { FacilityRoll } from '../FacilityType'
import FadeIn from '@/components/FadeIn'

type FacilityRollsProps = {
    rollList: FacilityRoll[]
}

const RollsView = ({ rollList }: FacilityRollsProps) => {
    return (
        <Card>
            <FadeIn>
                <p>
                    <strong className="highlight">Enter</strong> &#8594;{' '}
                    <strong>SPEND:</strong> 1 Energy &#8594; Roll 2d6:
                </p>
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
