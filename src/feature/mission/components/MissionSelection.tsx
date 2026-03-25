import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import { getMissionData } from '../data/runData'
import { MissionType } from '../types/MissionType'

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
                <div>
                    <span className='mr-1'>{index <= 2 ? '💪' : '🧠'}</span>
                    <Link to={`/mission/${mission.id}`}>{mission.title}:</Link>  
                    <br /><em>"{mission.description}"</em>
                </div>
                ))}
        </Card>
    )
}

export default MissionSelection
