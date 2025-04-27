import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { FacilityRoll } from '../FacilityType'

type FacilityRollsProps = {
    rollList: FacilityRoll[]
}

const FacilityRolls = ({ rollList }: FacilityRollsProps) => {
    return (
        <Card>
            <p>
                <strong className="highlight">
                    🏃 Enter &#8594; Roll 2d6:
                </strong>
            </p>
            <ul className="list-margin">
                {rollList.map((item: FacilityRoll, index: number) => (
                    <li key={index}>
                        <strong>Roll {item.roll}</strong> &#8594;{' '}
                        {item.link ? (
                            <Link to={`/rule${item.link}`}>{item.text}</Link>
                        ) : (
                            <>{item.text}</>
                        )}
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default FacilityRolls
