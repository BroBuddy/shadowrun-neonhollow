import React from 'react'
import { MissionTask, MissionOutcome } from '../MissionType'
import { Link } from 'react-router-dom'
import Card from '@/components/Card'

type MissionTasksProps = {
    tasks: MissionTask[]
}

const MissionTasks = ({ tasks }: MissionTasksProps) => {
    return (
        <Card>
            {tasks.map((task) => (
                <React.Fragment key={task.id}>
                    <p>
                        <strong className="highlight">{task.title}</strong>
                    </p>
                    <p>Roll {task.roll}:</p>
                    <ul className="list-margin">
                        {task.outcomes.map((outcome: MissionOutcome) => (
                            <li key={outcome.range}>
                                <strong>
                                    Roll {outcome.range} &#8594; {outcome.stat}{' '}
                                    (DC {outcome.dc}):
                                </strong>
                                <br />
                                {outcome.description}
                            </li>
                        ))}
                    </ul>
                    <p>
                        Fail? &#8594;{' '}
                        <Link to={`/${task.failure.redirect}`}>
                            {task.failure.text}
                        </Link>
                    </p>
                </React.Fragment>
            ))}
        </Card>
    )
}

export default MissionTasks
