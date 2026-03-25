import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { Mission } from '../types/MissionType'
import PageHeader from '@/components/PageHeader'

type Props = {
    mission: Mission
}

function MissionHeader({ mission }: Props) {
    return (
        <>
            <Headline>{mission.title}</Headline>

            <PageHeader
                title="MegaCorp"
                image="/images/city/MegaCorp.jpg">
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
            </PageHeader>

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
