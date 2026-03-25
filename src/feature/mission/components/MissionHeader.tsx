import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { Mission } from '../types/MissionType'

type Props = {
    mission: Mission
}

function MissionHeader({ mission }: Props) {
    return (
        <>
            <Headline>{mission.title}</Headline>

            <div className="flex gap-5 p-4">
                <div className="flex-1 basis-2/5">
                    <img
                        src="/images/city/MegaCorp.jpg"
                        alt="MegaCorp"
                        loading="lazy"
                    />
                </div>

                <div className="flex-1 basis-3/5">
                    <p>
                        <strong className="highlight">Client:</strong>
                        <br />
                        {mission.client}
                    </p>

                    <p>
                        <strong className="highlight">Location:</strong>
                        <br />
                        {mission.location}
                    </p>
                </div>
            </div>

            <Card>
                <p>
                    <strong className="highlight">Briefing:</strong>
                    <br /> {mission.briefing}
                </p>
            </Card>
        </>
    )
}

export default MissionHeader
