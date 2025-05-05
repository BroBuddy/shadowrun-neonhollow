import {
    MissionSkillCheck,
    MissionTwist as MissionTwistType,
} from '../MissionType'
import Card from '@/components/Card'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import PopUp from '@/components/Popup'
import MissionPerformance from '../pages/MissionPerformance'

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
                <span>Roll</span>
                <Dice dice={2} />
            </InRow>
            <ul className="list-margin">
                {twist.skillChecks.map(
                    (item: MissionSkillCheck, index: number) => (
                        <li key={index}>
                            <strong className="highlight">
                                {item.attribute} (DC {item.dc}):
                            </strong>
                            <br />
                            {item.description}
                        </li>
                    )
                )}
            </ul>
            <p>
                ✅ &#8594; +1 Performance
                <br />❌ &#8594; -1 Performance
            </p>
            <div className="pb-4">
                <InRow>
                    <span className="mr-1">&#8594;</span>
                    <PopUp title="Mission Performance">
                        <MissionPerformance />
                    </PopUp>
                </InRow>
            </div>
        </Card>
    )
}

export default TwistView
