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
                <strong>Select a Run:</strong>
            </p>

            <ul className="list-margin">
                {missionData.map((item: MissionType, index: number) => (
                    <li key={index}>
                        <Link to={`/mission/${item.id}`}>{item.title}:</Link>
                        <span className="mx-1">(Focus: {item.focus})</span>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default MissionSelection
