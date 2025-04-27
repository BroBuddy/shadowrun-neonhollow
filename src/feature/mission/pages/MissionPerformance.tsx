import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import {
    MissionEffect,
    MissionPerformance as MissionPerformanceType,
} from '../MissionType'
import Headline from '@/components/Headline'
import { getMissionPerformance } from '../performanceData'
import { useMemo } from 'react'

function MissionPerformance() {
    const missionPerformance = useMemo(() => getMissionPerformance(), [])

    if (!missionPerformance || missionPerformance.length === 0) {
        return <p>No mission performance data available.</p>
    }

    return (
        <>
            <Headline>Mission Performance</Headline>

            <Card>
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
                                    (effect: MissionEffect, index: number) => (
                                        <li key={index}>
                                            {effect.link ? (
                                                <>
                                                    {
                                                        effect.description.split(
                                                            ' → '
                                                        )[0]
                                                    }{' '}
                                                    &#8594;{' '}
                                                    {
                                                        effect.description.split(
                                                            ' → '
                                                        )[1]
                                                    }{' '}
                                                    &#8594;{' '}
                                                    <Link
                                                        to={`/resource${effect.link}`}
                                                    >
                                                        {
                                                            effect.description.split(
                                                                ' → '
                                                            )[2]
                                                        }
                                                    </Link>
                                                </>
                                            ) : (
                                                effect.description
                                            )}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )
                )}
            </Card>
        </>
    )
}

export default MissionPerformance
