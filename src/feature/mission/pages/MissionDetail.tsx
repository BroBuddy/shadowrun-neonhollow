import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import { getMissionById } from '../missionData'
import Headline from '@/components/Headline'
import TasksView from '../components/TasksView'
import TwistView from '../components/TwistView'
import FadeIn from '@/components/FadeIn'

function MissionDetail() {
    const { id } = useParams()
    const data = useMemo(() => getMissionById(id as string), [id])
    const [missionProgress, setMissionProgress] = useState<number>(-1)

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
                <div className="flex gap-5">
                    <div className="flex-1 basis-2/5">
                        <img
                            src="/images/MegaCorp.jpg"
                            alt="MegaCorp"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-1 basis-3/5">
                        <FadeIn>
                            <p>
                                <strong className="highlight">Client:</strong>
                                <br />
                                {data.client.name}, {data.client.location}
                            </p>
                            <p>
                                <strong className="highlight">Location:</strong>
                                <br /> {data.mission_location}
                            </p>
                        </FadeIn>
                    </div>
                </div>

                <p className="mt-5">
                    <strong className="highlight">Briefing:</strong>
                    <br /> {data.briefing}
                </p>
                {missionProgress === -1 && (
                    <div
                        className="mb-5 flex justify-center items-center cursor-pointer highlight"
                        onClick={() => handleMissionProgress(0)}
                    >
                        <span className="text-2xl mr-2">&#8595;</span>
                        <strong className="mt-1">Start</strong>
                    </div>
                )}
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
