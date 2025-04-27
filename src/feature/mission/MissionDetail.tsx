import React, { useEffect, useState } from 'react'
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
            <div className="card">
                <p>
                    <strong className="violet">Client:</strong>
                    <br />
                    {mission.client.name}, {mission.client.location}
                </p>
                <p>
                    <strong className="violet">Location:</strong>
                    <br /> {mission.mission_location}
                </p>
                <p>
                    <strong className="violet">Briefing:</strong>
                    <br /> {mission.briefing}
                </p>
            </div>

            <div className="card card-margin">
                {mission.tasks.map((task: MissionTask, index: number) => (
                    <React.Fragment key={task.id}>
                        <p>
                            <strong className="violet">
                                {index + 1}. {task.title}
                            </strong>
                        </p>
                        <p>Roll {task.roll}:</p>
                        <ul>
                            {task.outcomes.map(
                                (outcome: MissionOutcome, index: number) => (
                                    <li key={index}>
                                        <strong>
                                            {outcome.range} &#8594;{' '}
                                            {outcome.stat} (DC {outcome.dc}):
                                        </strong>
                                        <br />
                                        {outcome.description}
                                    </li>
                                )
                            )}
                        </ul>
                        <p>
                            Fail? &#8594;{' '}
                            <Link
                                to={`/${task.failure.redirect}`}
                                className="a"
                            >
                                {task.failure.redirect}
                            </Link>{' '}
                            &#8594; {task.failure.performance}
                        </p>
                    </React.Fragment>
                ))}
            </div>

            <div className="card">
                {' '}
                <p>
                    <strong className="violet">Twist:</strong>
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
                    <Link
                        to={`/${mission.twist.failure.redirect}`}
                        className="a"
                    >
                        {mission.twist.failure.redirect}
                    </Link>{' '}
                    &#8594; {mission.twist.failure.performance}
                </p>
                <p>
                    Success? &#8594;{' '}
                    <Link
                        to={`/${mission.twist.success.redirect}`}
                        className="a"
                    >
                        {mission.twist.success.redirect}
                    </Link>{' '}
                    &#8594; {mission.twist.success.performance}
                </p>
            </div>
        </Card>
    )
}

export default MissionDetail
