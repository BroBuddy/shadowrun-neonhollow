import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import { getMissionById } from '../missionData'
import Headline from '@/components/Headline'
import MissionTasks from '../components/MissionTasks'
import MissionTwist from '../components/MissionTwist'

function MissionDetail() {
    const { missionId } = useParams()
    const mission = useMemo(
        () => getMissionById(missionId as string),
        [missionId]
    )

    if (!mission) {
        return <></>
    }

    return (
        <>
            <Headline>{mission.title}</Headline>
            <Card>
                <p>
                    <strong className="highlight">Client:</strong>
                    <br />
                    {mission.client.name}, {mission.client.location}
                </p>
                <p>
                    <strong className="highlight">Location:</strong>
                    <br /> {mission.mission_location}
                </p>
                <p>
                    <strong className="highlight">Briefing:</strong>
                    <br /> {mission.briefing}
                </p>
            </Card>

            <MissionTasks tasks={mission.tasks} />

            <MissionTwist twist={mission.twist} />
        </>
    )
}

export default MissionDetail
