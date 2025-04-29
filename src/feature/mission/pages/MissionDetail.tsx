import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import { getMissionById } from '../missionData'
import Headline from '@/components/Headline'
import TasksView from '../components/TasksView'
import TwistView from '../components/TwistView'

function MissionDetail() {
    const { id } = useParams()
    const data = useMemo(() => getMissionById(id as string), [id])
    const [missionProgress, setMissionProgress] = useState<number>(0)

    const handleMissionProgress = (currentProgress: number) => {
        setMissionProgress(currentProgress)
    }

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

            <TasksView
                tasks={data.tasks}
                missionProgress={missionProgress}
                onProgress={handleMissionProgress}
            />

            {missionProgress === 3 && <TwistView twist={data.twist} />}
        </>
    )
}

export default MissionDetail
