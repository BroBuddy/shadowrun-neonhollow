import { Link } from 'react-router-dom'
import { MissionOption, MissionTwist as MissionTwistType } from '../MissionType'
import Card from '@/components/Card'
import FadeIn from '@/components/FadeIn'

type MissionTwistProps = {
    twist: MissionTwistType
}

const TwistView = ({ twist }: MissionTwistProps) => {
    return (
        <Card>
            <FadeIn>
                <p>
                    <strong className="highlight">Twist:</strong>
                    <br />
                    {twist.description}
                </p>
                <ul>
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
                    <strong>Fail?</strong> &#8594; -1 Performance
                    <br />
                    <strong>Success?</strong> &#8594; +1 Performance
                </p>
                <div className="mb-5 flex justify-center items-center">
                    <span className="text-2xl mr-2">&#8595;</span>
                    <span className="mt-1">Reward</span>
                </div>
                <p>
                    Claim your rewards from Mr. Johnson — what you earn depends
                    on your mission success.
                </p>
                <p>
                    &#8594;{' '}
                    <Link to="/mission/performance">Mission Reward</Link>
                </p>
            </FadeIn>
        </Card>
    )
}

export default TwistView
