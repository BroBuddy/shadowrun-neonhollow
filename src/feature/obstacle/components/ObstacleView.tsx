import { scrollToBottom } from '@/lib/helper'
import { Obstacle, ObstacleSkillCheck } from '../ObstacleType'
import Card from '@/components/Card'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import React from 'react'
import ObstacleProgress from './ObstacleProgress'

type ObstacleViewProps = {
    obstacles: Obstacle[]
    missionProgress: number
    onProgress: (currentProgress: number) => void
}

const ObstacleRoll = () => {
    return (
        <ul className="list-margin">
            <li>
                <strong className="highlight">Roll: 2-5:</strong> &#8594; DC 12
            </li>
            <li>
                <strong className="highlight">Roll 6-8:</strong> &#8594; DC 10
            </li>
            <li>
                <strong className="highlight">Roll 9-12:</strong> &#8594; DC 8
            </li>
        </ul>
    )
}

const ObstacleView = ({
    obstacles,
    missionProgress,
    onProgress,
}: ObstacleViewProps) => {
    const onHandleProgress = (currentProgress: number) => {
        handleScrollToBottom()
        onProgress(currentProgress)
    }

    const handleScrollToBottom = () => {
        scrollToBottom()
    }

    return (
        <>
            {obstacles.map((item: Obstacle, index: number) =>
                missionProgress >= index ? (
                    <React.Fragment key={item.id}>
                        <Card>
                            <p>
                                <strong className="highlight">
                                    {index + 1}. {item.title}:
                                </strong>
                                <br />
                                {item.description}
                            </p>
                            <InRow>
                                <span>Roll:</span>
                                <Dice dice={2} />
                            </InRow>
                            {ObstacleRoll()}

                            <InRow>
                                <span>Roll:</span>
                                <Dice dice={2} />
                                <span>&#8594;</span>
                                <span>Add</span>
                                <span>
                                    {item.skillChecks.map(
                                        (
                                            skillCheck: ObstacleSkillCheck,
                                            skillCheckIndex: number
                                        ) => (
                                            <React.Fragment
                                                key={skillCheckIndex}
                                            >
                                                {skillCheck.attribute}
                                                {skillCheckIndex === 0 && (
                                                    <span className="mx-1">
                                                        or
                                                    </span>
                                                )}
                                            </React.Fragment>
                                        )
                                    )}
                                </span>
                            </InRow>

                            <ObstacleProgress
                                missionProgress={missionProgress}
                                index={index}
                                onHandleProgress={onHandleProgress}
                            />
                        </Card>
                    </React.Fragment>
                ) : null
            )}
        </>
    )
}

export default ObstacleView
