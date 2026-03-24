import {
    MissionEffect,
    MissionPerformance as MissionPerformanceType,
} from '../types/MissionType'
import { getMissionPerformance } from '../data/performanceData'
import { useMemo } from 'react'
import EffectView from './EffectView'
import useResourceStore from '@/feature/resource/store/resourceStore'
import { Resources } from '@/feature/character/CharacterType'
import Card from '@/components/Card'
import FadeIn from '@/components/FadeIn'

type Props = {
    successes: number
    total: number
}

function MissionPerformance({ successes, total }: Props) {
    const modifyResources = useResourceStore((state) => state.modifyResources)
    const missionPerformance = useMemo(() => getMissionPerformance(), [])

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
            <FadeIn>
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
                                <strong className="highlight">{item.title}</strong>{' '}
                                &#8594; {item.level}
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

                                {item.effects &&
                                    item.effects.map(
                                        (effect: MissionEffect, index: number) => (
                                            <EffectView key={index} effect={effect} />
                                        )
                                    )}
                            </ul>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </Card>
    )
}

export default MissionPerformance
