import React from 'react'
import { MissionTask, MissionOutcome } from '../MissionType'
import { Link } from 'react-router-dom'
import Card from '@/components/Card'

type MissionTasksProps = {
    tasks: MissionTask[]
}

const TasksView = ({ tasks }: MissionTasksProps) => {
    return (
        <Card>
            {tasks.map((item: MissionTask) => (
                <React.Fragment key={item.id}>
                    <p>
                        <strong className="highlight">{item.title}</strong>
                    </p>
                    <p>Roll {item.roll}:</p>
                    <ul className="list-margin">
                        {item.outcomes.map((outcome: MissionOutcome) => (
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
                        <Link to={`/${item.failure.redirect}`}>
                            {item.failure.text}
                        </Link>
                    </p>
                </React.Fragment>
            ))}
        </Card>
    )
}

export default TasksView
