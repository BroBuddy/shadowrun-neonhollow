import Card from '@/components/Card'
import { MissionPerformance as MissionPerformanceType } from '../MissionType'
import Headline from '@/components/Headline'
import { getMissionPerformance } from '../performanceData'
import { useMemo } from 'react'
import FadeIn from '@/components/FadeIn'
import EffectView from '../components/EffectView'

function MissionPerformance() {
    const missionPerformance = useMemo(() => getMissionPerformance(), [])

    if (!missionPerformance || missionPerformance.length === 0) {
        return <p>No mission performance data available.</p>
    }

    return (
        <>
            <Headline>Mission Performance</Headline>

            <Card>
                <FadeIn>
                    <p>
                        <strong>Mr. Johnson</strong> doesn’t just care that the
                        job’s done — he cares how it’s done. The better your
                        performance, the greater the reward.
                    </p>
                    {missionPerformance.map(
                        (performance: MissionPerformanceType) => (
                            <div key={performance.id}>
                                <p>
                                    <strong className="highlight">
                                        {performance.title}
                                    </strong>{' '}
                                    &#8594; {performance.level}
                                </p>
                                <ul className="list-margin">
                                    {performance.effects.map(
                                        (effect, index) => (
                                            <EffectView
                                                key={index}
                                                effect={effect}
                                            />
                                        )
                                    )}
                                </ul>
                            </div>
                        )
                    )}
                </FadeIn>
            </Card>
        </>
    )
}

export default MissionPerformance
