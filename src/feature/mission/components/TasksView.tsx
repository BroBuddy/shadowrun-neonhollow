import { MissionTask, MissionOutcome } from '../MissionType'
import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import FadeIn from '@/components/FadeIn'
import React from 'react'

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
    const onHandleProgress = (currentProgress: number) => {
        handleScrollToBottom()
        onProgress(currentProgress)
    }

    const handleScrollToBottom = () => {
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            })
        }, 0)
    }

    return (
        <>
            {tasks.map((item: MissionTask, index: number) =>
                missionProgress >= index ? (
                    <React.Fragment key={item.id}>
                        <Card>
                            <FadeIn>
                                <p>
                                    <strong className="highlight">
                                        {item.title}
                                    </strong>
                                </p>
                                <p>Roll 2d6:</p>
                                <ul className="list-margin">
                                    {item.outcomes.map(
                                        (outcome: MissionOutcome) => (
                                            <li key={outcome.range}>
                                                <strong>
                                                    Roll {outcome.range} &#8594;{' '}
                                                    {outcome.stat} (DC{' '}
                                                    {outcome.dc}
                                                    ):
                                                </strong>
                                                <br />
                                                {outcome.description}
                                            </li>
                                        )
                                    )}
                                </ul>
                                <p>
                                    Fail? &#8594;{' '}
                                    <Link to={`/${item.failure.redirect}`}>
                                        {item.failure.text}
                                    </Link>
                                </p>
                                {missionProgress === index && (
                                    <div
                                        className="mb-5 flex justify-center items-center cursor-pointer"
                                        onClick={() =>
                                            onHandleProgress(index + 1)
                                        }
                                    >
                                        <span className="text-2xl mr-2">
                                            &#8595;
                                        </span>
                                        <span className="mt-1">
                                            {index < 2
                                                ? 'Next Task'
                                                : 'Reveal Twist'}
                                        </span>
                                    </div>
                                )}
                            </FadeIn>
                        </Card>
                    </React.Fragment>
                ) : null
            )}
        </>
    )
}

export default TasksView
