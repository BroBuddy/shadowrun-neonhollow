import {
    MissionEffect,
    MissionPerformance as MissionPerformanceType,
} from '../MissionType'
import { getMissionPerformance } from '../performanceData'
import { useMemo } from 'react'
import EffectView from '../components/EffectView'
import useResourceStore from '@/feature/resource/store/resourceStore'
import { Resources } from '@/feature/character/CharacterType'

function MissionPerformance() {
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
        <div>
            <p>
                <strong>Mr. Johnson</strong> doesn’t just care that the job’s
                done — he cares how it’s done.
            </p>
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
    )
}

export default MissionPerformance
