import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import { getMissionById } from '../missionData'
import Headline from '@/components/Headline'
import TasksView from '../components/TasksView'
import TwistView from '../components/TwistView'

function MissionDetail() {
    const { id } = useParams()
    const data = useMemo(() => getMissionById(id as string), [id])

    if (!data) {
        return <></>
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <p>
                    <strong className="highlight">Client:</strong>
                    <br />
                    {data.client.name}, {data.client.location}
                </p>
                <p>
                    <strong className="highlight">Location:</strong>
                    <br /> {data.mission_location}
                </p>
                <p>
                    <strong className="highlight">Briefing:</strong>
                    <br /> {data.briefing}
                </p>
            </Card>

            <TasksView tasks={data.tasks} />

            <TwistView twist={data.twist} />
        </>
    )
}

export default MissionDetail
