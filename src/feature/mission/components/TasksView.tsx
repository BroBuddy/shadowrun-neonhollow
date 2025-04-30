import { MissionTask, MissionOutcome } from '../MissionType'
import Card from '@/components/Card'
import Dice from '@/components/Dice'
import FadeIn from '@/components/FadeIn'
import InRow from '@/components/InRow'
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

                                <InRow>
                                    <span>Roll:</span>
                                    <Dice dice={2} />
                                </InRow>

                                <ul className="list-margin">
                                    {item.outcomes.map(
                                        (outcome: MissionOutcome) => (
                                            <li key={outcome.range}>
                                                <strong>
                                                    Roll {outcome.range} &#8594;{' '}
                                                    <span className="highlight">
                                                        {outcome.stat} (DC{' '}
                                                        {outcome.dc}
                                                        ):
                                                    </span>
                                                </strong>
                                                <br />
                                                {outcome.description}
                                            </li>
                                        )
                                    )}
                                </ul>
                                <p>
                                    <strong>Fail?</strong> &#8594; -1
                                    Performance
                                    <br />
                                    <strong>Success?</strong> &#8594; +1
                                    Performance
                                </p>
                                {missionProgress === index && (
                                    <div
                                        className="mb-5 flex justify-center items-center cursor-pointer highlight"
                                        onClick={() =>
                                            onHandleProgress(index + 1)
                                        }
                                    >
                                        <span className="text-2xl mr-2">
                                            &#8595;
                                        </span>
                                        <strong className="mt-1">
                                            {index < 2 ? 'Next' : 'Twist'}
                                        </strong>
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
