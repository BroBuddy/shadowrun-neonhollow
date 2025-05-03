import { scrollToBottom } from '@/lib/helper'
import { Obstacle, ObstacleSkillCheck } from '../ObstacleType'
import Card from '@/components/Card'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import React from 'react'

type ObstacleViewProps = {
    obstacles: Obstacle[]
    missionProgress: number
    onProgress: (currentProgress: number) => void
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
                                <span>DC</span>
                                <span>&#8594;</span>
                                <span>Roll:</span>
                                <Dice dice={2} />
                            </InRow>
                            <ul className="list-margin">
                                <li>
                                    <strong>Roll: 2-5:</strong> &#8594; DC 12
                                </li>
                                <li>
                                    <strong>Roll 6-8:</strong> &#8594; DC 10
                                </li>
                                <li>
                                    <strong>Roll 9-12:</strong> &#8594; DC 8
                                </li>
                            </ul>

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
                                                {skillCheck.icon}{' '}
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

                            <p className="mt-3">
                                ✅ &#8594; +1 Performance
                                <br />❌ &#8594; -1 Performance
                            </p>

                            {missionProgress === index && (
                                <div
                                    className="mb-5 flex justify-center items-center cursor-pointer highlight"
                                    onClick={() => onHandleProgress(index + 1)}
                                >
                                    <span className="text-2xl mr-2">
                                        &#8595;
                                    </span>
                                    <strong className="mt-1">
                                        {index < 2 ? 'Next' : 'Twist'}
                                    </strong>
                                </div>
                            )}
                        </Card>
                    </React.Fragment>
                ) : null
            )}
        </>
    )
}

export default ObstacleView
