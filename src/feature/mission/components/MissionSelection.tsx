import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import { MissionType } from '../types/MissionType'
import { getMissionData } from '../services/MissionService'

const MissionSelection = () => {
    const missionData = getMissionData()

    if (!missionData || missionData.length === 0) {
        return <p>No mission data available.</p>
    }

    return (
        <Card>
            <p>
                <strong>Choose your run:</strong>
            </p>

            {missionData.map((mission: MissionType, index: number) => (
                <div key={index}>
                    <span className='mr-1'>{index <= 2 ? '💪' : '🧠'}</span>
                    <Link to={`/mission/${mission.id}`}>{mission.title}:</Link>  
                    <br /><em>"{mission.description}"</em>
                </div>
                ))}
        </Card>
    )
}

export default MissionSelection
