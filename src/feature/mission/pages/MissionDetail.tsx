import { useMemo, useState } from 'react'
import Headline from '@/components/Headline'
import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import { scrollToBottom } from '@/lib/helper'
import React from 'react'
import { useParams } from 'react-router-dom'
import { StepState } from '../types/MissionType'
import ObstacleRoll from '../components/ObstacleRoll'
import MissionPerformance from './MissionPerformance'
import { getMissionById } from '../data/runData'

const DC_MAP: Record<number, number> = { 1: 12, 2: 12, 3: 10, 4: 10, 5: 8, 6: 8 }
const rollD6 = () => Math.floor(Math.random() * 6) + 1

function MissionDetail() {
    const { id } = useParams()
    const mission = useMemo(() => getMissionById(id as string), [id])

    const preRolledSteps = useMemo<StepState[]>(() => {
        return mission.steps.map((step) => {
            const eventRoll = rollD6()
            const event = step.events[eventRoll - 1]
            const dcRoll = event.fixedDC ? 0 : rollD6()
            const dc = event.fixedDC ?? DC_MAP[dcRoll]
            
            return {
                event,
                dcRoll,
                dc,
                selectedAttribute: null,
                checkRoll: null,
                result: event.autoSuccess ? 'success' : null,
            }
        })
    }, [])

    const [stepStates, setStepStates] = useState<StepState[]>(preRolledSteps)
    const [missionProgress, setMissionProgress] = useState<number>(1)

    const handleNext = (currentIndex: number) => {
        setMissionProgress(currentIndex + 1)
        setTimeout(() => scrollToBottom(), 100)
    }

    const performanceScore = stepStates.reduce((acc, s) => {
        if (s.result === 'success') return acc + 1
        if (s.result === 'failure') return acc - 1
        return acc
    }, 0)

    const performanceDisplay = performanceScore > 0 
        ? `+${performanceScore}` 
        : `${performanceScore}`

    const handleSuccess = (index: number) => {
        setStepStates((prev) => {
            const next = [...prev]
            next[index] = { ...next[index], result: 'success' }
            return next
        })

        handleNext(index+1);
    }

    const handleFailure = (index: number) => {
        setStepStates((prev) => {
            const next = [...prev]
            next[index] = { ...next[index], result: 'failure' }
            return next
        })

        handleNext(index+1);
    }

    return (
        <>
            <Headline>{mission.title}</Headline>

            <div className="flex gap-5 p-4">
                <div className="flex-1 basis-2/5">
                    <img
                        src="/images/city/MegaCorp.jpg"
                        alt="MegaCorp"
                        loading="lazy"
                    />
                </div>

                <div className="flex-1 basis-3/5">
                    <FadeIn>
                        <p>
                            <strong className="highlight">Client:</strong>
                            <br />
                            {mission.client}
                        </p>
                        <p>
                            <strong className="highlight">Location:</strong>
                            <br />
                            {mission.location}
                        </p>
                    </FadeIn>
                </div>
            </div>

            <Card>
                <FadeIn>
                    <p>
                        <strong className="highlight">Briefing:</strong>
                        <br /> {mission.briefing}
                    </p>
                </FadeIn>
            </Card>

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
                                        {index + 1}. {step.name}: {event.title}
                                    </strong>
                                    <br />
                                    {event.description}
                                </p>

                                {!event.autoSuccess && (
                                    <>
                                        <ObstacleRoll />

                                        <InRow>
                                            <span>Roll</span>
                                            <Dice dice={2} />
                                            <span>&#8594;</span>
                                            <span>Add</span>
                                            <span>
                                                {event.skillChecks.map(
                                                    (
                                                        skillCheck: string,
                                                        skillCheckIndex: number
                                                    ) => (
                                                        <React.Fragment
                                                            key={skillCheckIndex}
                                                        >
                                                            {skillCheck}
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
                                    </>
                                )}

                                {isActive && event.autoSuccess && (
                                     <p className='mt-3 mb-1 cursor-pointer highlight'
                                        onClick={() => { handleSuccess(index) }}>
                                        <span className="mx-1">✅</span>
                                        <span className="font-bold">+1 Performance</span>
                                    </p>
                                )}

                                {isActive && !event.autoSuccess && missionProgress <= 6 && (
                                        <InRow>
                                            <p className='mt-3 mb-1 cursor-pointer highlight'
                                                onClick={() => { handleSuccess(index) }}>
                                                <span className="mx-1">✅</span>
                                                <span className="font-bold">+1 Performance</span>
                                            </p>

                                            <p className='mt-3 mb-1 cursor-pointer highlight'
                                                onClick={() => { handleFailure(index) }}>
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

            {missionProgress > 6 && (
                <Card>
                    <FadeIn>
                        <p>
                            <strong className="highlight">Mission Performance:</strong>
                            <span className='px-2'>{performanceDisplay}</span>
                        </p>

                        <div className='mt-3'>
                            <MissionPerformance />
                        </div>                        
                    </FadeIn>
                </Card>
            )}
        </>
    )
}

export default MissionDetail
