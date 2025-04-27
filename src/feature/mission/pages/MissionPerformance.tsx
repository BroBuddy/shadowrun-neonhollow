import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { getMissionPerformance } from '../missionData'
import {
    MissionEffect,
    MissionPerformance as MissionPerformanceType,
} from '../MissionType'
import Headline from '@/components/Headline'

function MissionPerformance() {
    const missionPerformance = getMissionPerformance()

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
                                <strong className="violet">
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
                                                    <Link to={effect.link}>
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
