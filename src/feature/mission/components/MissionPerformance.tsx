import {
    MissionPerformance as MissionPerformanceType,
} from '../types/MissionType'
import useResourceStore from '@/feature/resource/store/resourceStore'
import Card from '@/components/Card'
import { Resources } from '@/feature/character/types/CharacterType'
import Arrow from '@/components/Arrow'
import { getMissionPerformance } from '../services/PerformanceService'

type Props = {
    successes: number
    total: number
}

function MissionPerformance({ successes, total }: Props) {
    const modifyResources = useResourceStore((state) => state.modifyResources)
    const missionPerformance = getMissionPerformance()

    const handleModifyResources = (resources?: Resources) => {
        if (resources) {
            modifyResources(resources)
        }
    }

    if (!missionPerformance || missionPerformance.length === 0) {
        return <p>No mission performance data available.</p>
    }

    return (
        <Card>
            <p>
                <strong className="highlight">Mission Performance:</strong>
                <span className="px-2">{successes}/{total}</span>
            </p>

            <div className="mt-3">
                {missionPerformance.map((item: MissionPerformanceType) => (
                    <div key={item.id}>
                        <p
                            className="cursor-pointer"
                            onClick={() => handleModifyResources(item.resources)}
                        >
                            <strong className="highlight">{item.title}</strong>
                            <Arrow className='mx-1' />
                            {item.level}
                        </p>
                        
                        <ul className="list-margin">
                            {item.resources &&
                                Object.entries(item.resources).map(
                                    ([key, value], resourceIndex: number) => (
                                        <li key={resourceIndex}>
                                            {key === 'Nuyen'
                                                ? `+${value}.000`
                                                : `${value > 0 ? `+${value}` : value}`}{' '}
                                            {key}
                                        </li>
                                    )
                                )}
                        </ul>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default MissionPerformance
