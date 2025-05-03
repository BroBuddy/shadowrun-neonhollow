import { Link } from 'react-router-dom'
import { MissionOption, MissionTwist as MissionTwistType } from '../MissionType'
import Card from '@/components/Card'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'

type MissionTwistProps = {
    twist: MissionTwistType
}

const TwistView = ({ twist }: MissionTwistProps) => {
    return (
        <Card>
            <p>
                <strong className="highlight">Twist:</strong>
                <br />
                {twist.description}
            </p>

            <InRow>
                <span>Roll:</span>
                <Dice dice={2} />
            </InRow>
            <ul className="list-margin">
                {twist.options.map((item: MissionOption, index: number) => (
                    <li key={index}>
                        <strong className="highlight">
                            {item.stat} (DC {item.dc}):
                        </strong>
                        <br />
                        {item.description}
                    </li>
                ))}
            </ul>
            <p>
                ✅ &#8594; +1 Performance
                <br />❌ &#8594; -1 Performance
            </p>
            <div className="mb-5 flex justify-center items-center">
                <Link to="/mission/performance">
                    <span className="text-2xl mr-2">&#8595;</span>
                    <span className="mt-1 text-md">FINSIH</span>
                </Link>
            </div>
        </Card>
    )
}

export default TwistView
