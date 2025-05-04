import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import { getMissionById } from '../missionData'
import Headline from '@/components/Headline'
import TwistView from '../components/TwistView'
import FadeIn from '@/components/FadeIn'
import { scrollToBottom } from '@/lib/helper'
import { getRandomObstacles } from '@/feature/obstacle/obstacleData'
import ObstacleView from '@/feature/obstacle/components/ObstacleView'

function MissionDetail() {
    const { id } = useParams()
    const data = useMemo(() => getMissionById(id as string), [id])
    const obstacles = useMemo(() => getRandomObstacles(), [])
    const [missionProgress, setMissionProgress] = useState<number>(-1)

    const handleMissionProgress = (currentProgress: number) => {
        setMissionProgress(currentProgress)
        scrollToBottom()
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
                            src="/images/city/MegaCorp.jpg"
                            alt="MegaCorp"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-1 basis-3/5">
                        <FadeIn>
                            <p>
                                <strong className="highlight">Client:</strong>
                                <br />
                                {data.client}
                            </p>
                            <p>
                                <strong className="highlight">Location:</strong>
                                <br /> MegaCorp
                            </p>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn>
                    <p className="mt-5">
                        <strong className="highlight">Briefing:</strong>
                        <br /> {data.briefing}
                    </p>
                </FadeIn>

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

            {obstacles && (
                <ObstacleView
                    obstacles={obstacles}
                    missionProgress={missionProgress}
                    onProgress={handleMissionProgress}
                />
            )}

            {missionProgress === 3 && <TwistView twist={data.twist} />}
        </>
    )
}

export default MissionDetail
