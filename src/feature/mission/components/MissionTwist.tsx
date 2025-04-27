import { Link } from 'react-router-dom'
import { MissionOption, MissionTwist as MissionTwistType } from '../MissionType'
import Card from '@/components/Card'

type MissionTwistProps = {
    twist: MissionTwistType
}

const MissionTwist = ({ twist }: MissionTwistProps) => {
    return (
        <Card>
            <p>
                <strong className="highlight">Twist:</strong>
                <br />
                {twist.description}
            </p>
            <ul>
                {twist.options.map((option: MissionOption, index: number) => (
                    <li key={index}>
                        <strong>
                            {option.stat} (DC {option.dc}):
                        </strong>
                        <br />
                        {option.description}
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
        </Card>
    )
}

export default MissionTwist
