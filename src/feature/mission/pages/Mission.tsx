import Headline from '@/components/Headline'
import { getMissionData } from '../missionData'
import { useMemo } from 'react'
import { Mission as MissionType } from '../MissionType'
import MissionInstruction from '../components/MissionInstruction'
import MissionTypes from '../components/MissionTypes'
import MissionHeader from '../components/MissionHeader'

function Mission() {
    const data = useMemo(() => {
        return getMissionData() as MissionType[]
    }, [])

    if (!data) {
        return <></>
    }

    return (
        <>
            <Headline>Mr. Johnson</Headline>
            <MissionHeader />
            <MissionInstruction />
            <MissionTypes data={data} />
        </>
    )
}

export default Mission
