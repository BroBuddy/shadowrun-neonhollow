import React from 'react'
import Card from '@/components/Card'
import FadeIn from '@/components/FadeIn'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import ObstacleRoll from './ObstacleRoll'
import { Mission } from '../types/MissionType'

type StepResult = 'success' | 'failure' | null

interface StepState {
    event: {
        title: string
        description: string
        skillChecks: string[]
        autoSuccess?: boolean
        fixedDC?: number
    }
    result: StepResult
}

type Props = {
    mission: Mission
    stepStates: StepState[]
    missionProgress: number
    onSuccess: (index: number) => void
    onFailure: (index: number) => void
}

function MissionSteps({ mission, stepStates, missionProgress, onSuccess, onFailure }: Props) {
    return (
        <>
            {mission.steps.map((step, index) => {
                if (missionProgress <= index) return null

                const { event } = stepStates[index]
                const isActive = index === missionProgress - 1

                return (
                    <React.Fragment key={step.id}>
                        <Card>
                            <FadeIn>
                                <p>
                                    <strong className="highlight">
                                        {event.title}
                                    </strong>
                                </p>

                                <p>{event.description}</p>

                                {isActive && !event.autoSuccess && (
                                    <>
                                        <ObstacleRoll />

                                        <InRow>
                                            <span>Roll</span>
                                            <Dice dice={2} />
                                            <span>&#8594;</span>
                                            <span>Add</span>
                                            <span>
                                                {event.skillChecks.map(
                                                    (skillCheck: string, skillCheckIndex: number) => (
                                                        <React.Fragment key={skillCheckIndex}>
                                                            {skillCheck}
                                                            {skillCheckIndex === 0 && (
                                                                <span className="mx-1">or</span>
                                                            )}
                                                        </React.Fragment>
                                                    )
                                                )}
                                            </span>
                                        </InRow>
                                    </>
                                )}

                                {isActive && event.autoSuccess && (
                                    <p
                                        className="mt-3 mb-1 cursor-pointer highlight"
                                        onClick={() => onSuccess(index)}
                                    >
                                        <span className="mx-1">✅</span>
                                        <span className="font-bold">+1 Performance</span>
                                    </p>
                                )}

                                {isActive && !event.autoSuccess && missionProgress <= 6 && (
                                    <InRow>
                                        <p
                                            className="mt-3 mb-1 cursor-pointer highlight"
                                            onClick={() => onSuccess(index)}
                                        >
                                            <span className="mx-1">✅</span>
                                            <span className="font-bold">+1 Performance</span>
                                        </p>
                                        <p
                                            className="mt-3 mb-1 cursor-pointer highlight"
                                            onClick={() => onFailure(index)}
                                        >
                                            <span className="mx-1">❌</span>
                                            <span className="font-bold">-1 Performance</span>
                                        </p>
                                    </InRow>
                                )}
                            </FadeIn>
                        </Card>
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default MissionSteps
