import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import { MissionType } from '../types/MissionType'
import { getMissionData } from '../services/MissionService'
import useResourceStore from '@/feature/resource/store/resourceStore'
import { useState } from 'react'

const MissionSelection = () => {
    const missionData = getMissionData() as MissionType[]
    const noto = useResourceStore((state) => state.resources.Noto)
    
    const [availableRuns] = useState(() => {
        const shuffled = [...missionData].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, Math.max(1, missionData.length - noto))
    })

    if (!missionData || missionData.length === 0) {
        return <p>No mission data available.</p>
    }

    return (
        <Card>
            <p><strong>Choose your run:</strong></p>
            <p><em>"Higher Noto reduces available contracts."</em></p>

            {availableRuns.map((mission: MissionType, index: number) => (
                <div key={index}>
                    <span className='mr-1'>{mission.icon}</span>
                    <Link to={`/mission/${mission.id}`}>{mission.title}:</Link>  
                    <br /><em>"{mission.description}"</em>
                </div>
                ))}
        </Card>
    )
}

export default MissionSelection
