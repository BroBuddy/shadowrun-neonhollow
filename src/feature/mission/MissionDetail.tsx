import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '@/components/Card'
import {
    Mission,
    MissionOption,
    MissionOutcome,
    MissionTask,
} from './MissionType'
import { getMissionById } from './missionData'

function MissionDetail() {
    const { missionId } = useParams()
    const [mission, setMission] = useState<Mission | null>(null)

    useEffect(() => {
        const missionItem = getMissionById(missionId as string)
        setMission(missionItem as Mission)
    }, [missionId])

    if (!mission) {
        return <></>
    }

    return (
        <Card title={mission.title}>
            <p>
                <strong>Client:</strong>
                <br />
                {mission.client.name}, {mission.client.location}
            </p>
            <p>
                <strong>Location:</strong>
                <br /> {mission.mission_location}
            </p>
            <p>
                <strong>Briefing:</strong>
                <br /> {mission.briefing}
            </p>
            <hr />

            {mission.tasks.map((task: MissionTask, index: number) => (
                <div key={task.id}>
                    <p>
                        <strong>
                            {index + 1}. {task.title}
                        </strong>
                    </p>
                    <p>Roll {task.roll}:</p>
                    <ul>
                        {task.outcomes.map(
                            (outcome: MissionOutcome, index: number) => (
                                <li key={index}>
                                    <strong>
                                        {outcome.range} &#8594; {outcome.stat}{' '}
                                        (DC {outcome.dc}):
                                    </strong>
                                    <br />
                                    {outcome.description}
                                </li>
                            )
                        )}
                    </ul>
                    <p>
                        Fail? &#8594;{' '}
                        <Link to={`/${task.failure.redirect}`} className="a">
                            {task.failure.redirect}
                        </Link>{' '}
                        &#8594; {task.failure.performance}
                    </p>
                    <hr />
                </div>
            ))}

            <p>
                <strong>Twist:</strong>
                <br />
                {mission.twist.description}
            </p>
            <ul>
                {mission.twist.options.map(
                    (option: MissionOption, index: number) => (
                        <li key={index}>
                            <strong>
                                {option.stat} (DC {option.dc}):
                            </strong>
                            <br />
                            {option.description}
                        </li>
                    )
                )}
            </ul>
            <p>
                Fail? &#8594;{' '}
                <Link to={`/${mission.twist.failure.redirect}`} className="a">
                    {mission.twist.failure.redirect}
                </Link>{' '}
                &#8594; {mission.twist.failure.performance}
            </p>
            <p>
                Success? &#8594;{' '}
                <Link to={`/${mission.twist.success.redirect}`} className="a">
                    {mission.twist.success.redirect}
                </Link>{' '}
                &#8594; {mission.twist.success.performance}
            </p>
        </Card>
    )
}

export default MissionDetail
