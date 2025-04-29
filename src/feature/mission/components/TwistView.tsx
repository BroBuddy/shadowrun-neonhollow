import { Link } from 'react-router-dom'
import { MissionOption, MissionTwist as MissionTwistType } from '../MissionType'
import Card from '@/components/Card'

type MissionTwistProps = {
    twist: MissionTwistType
}

const TwistView = ({ twist }: MissionTwistProps) => {
    return (
        <Card>
            <div className="mission-task">
                <p>
                    <strong className="highlight">Twist:</strong>
                    <br />
                    {twist.description}
                </p>
                <ul>
                    {twist.options.map((item: MissionOption, index: number) => (
                        <li key={index}>
                            <strong>
                                {item.stat} (DC {item.dc}):
                            </strong>
                            <br />
                            {item.description}
                        </li>
                    ))}
                </ul>
                <p>
                    Fail? &#8594;{' '}
                    <Link to={`/${twist.failure.redirect}`}>
                        {twist.failure.text}
                    </Link>
                </p>
                <p>
                    Success? &#8594;{' '}
                    <Link to={`/${twist.success.redirect}`}>
                        {twist.success.text}
                    </Link>
                </p>
            </div>
        </Card>
    )
}

export default TwistView
