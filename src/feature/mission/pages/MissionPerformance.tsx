import { MissionPerformance as MissionPerformanceType } from '../MissionType'
import { getMissionPerformance } from '../performanceData'
import { useMemo } from 'react'
import EffectView from '../components/EffectView'

function MissionPerformance() {
    const missionPerformance = useMemo(() => getMissionPerformance(), [])

    if (!missionPerformance || missionPerformance.length === 0) {
        return <p>No mission performance data available.</p>
    }

    return (
        <div>
            <p>
                <strong>Mr. Johnson</strong> doesn’t just care that the job’s
                done — he cares how it’s done.
            </p>
            {missionPerformance.map((performance: MissionPerformanceType) => (
                <div key={performance.id}>
                    <p>
                        <strong className="highlight">
                            {performance.title}
                        </strong>{' '}
                        &#8594; {performance.level}
                    </p>
                    <ul className="list-margin">
                        {performance.effects.map((effect, index) => (
                            <EffectView key={index} effect={effect} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default MissionPerformance
