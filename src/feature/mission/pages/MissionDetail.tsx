import { useMemo, useState } from 'react'
import { scrollToBottom } from '@/lib/helper'
import { useParams } from 'react-router-dom'
import { StepState } from '../types/MissionType'
import MissionPerformance from '../components/MissionPerformance'
import { getMissionById } from '../data/runData'
import MissionHeader from '../components/MissionHeader'
import MissionSteps from '../components/MissionSteps'

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
    }, [mission.steps])

    const [stepStates, setStepStates] = useState<StepState[]>(preRolledSteps)
    const [missionProgress, setMissionProgress] = useState<number>(1)

    const performanceScore = stepStates.reduce((acc, s) => {
        if (s.result === 'success') return acc + 1
        if (s.result === 'failure') return acc - 1
        return acc
    }, 0)

    const handleNext = (currentIndex: number) => {
        setMissionProgress(currentIndex + 1)
        setTimeout(() => scrollToBottom(), 100)
    }

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
            <MissionHeader mission={mission} />

            <MissionSteps
                mission={mission}
                stepStates={stepStates}
                missionProgress={missionProgress}
                onSuccess={handleSuccess}
                onFailure={handleFailure}
            />

            {missionProgress > 6 && (
                <MissionPerformance score={performanceScore} />
            )}
        </>
    )
}

export default MissionDetail
