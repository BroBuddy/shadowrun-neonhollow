import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import { MissionType } from '../types/MissionType'
import { getMissionData } from '../services/MissionService'
import useResourceStore from '@/feature/resource/store/resourceStore'

const getJohnsonLine = (noto: number) => {
    switch (noto) {
        case 0:
            return "Ghost. Good. Plenty of work.";
        case 1:
            return "You’re getting noticed. Careful.";
        case 2:
            return "Too much heat. Slim pickings.";
        case 3:
            return "Burned. No jobs.";
    }
};

const getRunCount = (noto: number) => {
    switch (noto) {
        case 0: return 6
        case 1: return 4
        case 2: return 2
        case 3: return 0
    }
}

const MissionSelection = () => {
    const missionData = getMissionData() as MissionType[]
    const noto = useResourceStore((state) => state.resources.Noto)
    
    const availableRuns = (() => {
        const shuffled = [...missionData].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, getRunCount(noto))
    })()

    if (!missionData || missionData.length === 0) {
        return <p>No mission data available.</p>
    }

    return (
        <Card>
            <p><strong>Available contracts:</strong></p>
            <p><em>"{getJohnsonLine(noto)}"</em></p>

            {availableRuns.length > 0
                ? availableRuns.map((mission: MissionType, index: number) => (
                <div key={index}>
                    <span className='mr-1'>{mission.icon}</span>
                    <Link to={`/mission/${mission.id}`}>{mission.title}:</Link>  
                    <br /><em>"{mission.description}"</em>
                </div>
                )) : null}
        </Card>
    )
}

export default MissionSelection
