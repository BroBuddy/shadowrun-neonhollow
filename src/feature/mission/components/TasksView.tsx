import { MissionTask, MissionOutcome } from '../MissionType'
import { Link } from 'react-router-dom'
import Card from '@/components/Card'

type MissionTasksProps = {
    tasks: MissionTask[]
    missionProgress: number
    onProgress: (currentProgress: number) => void
}

const TasksView = ({
    tasks,
    missionProgress,
    onProgress,
}: MissionTasksProps) => {
    return (
        <Card>
            {tasks.map((item: MissionTask, index: number) =>
                missionProgress >= index ? (
                    <div className="mission-task" key={item.id}>
                        <p>
                            <strong className="highlight">{item.title}</strong>
                        </p>
                        <p>🎲 Roll {item.roll}:</p>
                        <ul className="list-margin">
                            {item.outcomes.map((outcome: MissionOutcome) => (
                                <li key={outcome.range}>
                                    <strong>
                                        Roll {outcome.range} &#8594;{' '}
                                        {outcome.stat} (DC {outcome.dc}):
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
                        <p
                            className="text-2xl mb-5 flex justify-center items-center cursor-pointer"
                            onClick={() => onProgress(index + 1)}
                        >
                            &#8595;
                        </p>
                    </div>
                ) : null
            )}
        </Card>
    )
}

export default TasksView
