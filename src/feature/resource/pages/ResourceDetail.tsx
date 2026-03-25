import { useCallback, useMemo } from 'react'
import { ResourceRoll, Resource as ResourceType } from '../types/ResourceType'
import { getIcon } from '@/lib/helper'
import useResourceStore from '../store/resourceStore'
import { Resources } from '@/feature/character/types/CharacterType'
import { getResourceByTag } from '../services/ResourceService'

type ResourceDetailProps = {
    tag?: string
}

function ResourceDetail({ tag }: ResourceDetailProps) {
    const modifyResources = useResourceStore((state) => state.modifyResources)
    const data = useMemo(() => {
        try {
            return getResourceByTag(tag as string) as ResourceType
        } catch (error) {
            console.error('Error fetching resource data:', error)
            return null
        }
    }, [tag])

    const handleModifyResources = useCallback(
        (resources?: Resources) => {
            if (resources) {
                modifyResources(resources)
            }
        },
        [modifyResources]
    )

    if (!tag || !data || !data.rollList) {
        return <p>No resource data available.</p>
    }

    return (
        <div className="min-w-[300px]">
            {data.rollList &&
                data.rollList.map((item: ResourceRoll) => (
                    <div key={item.range}>
                        <>
                            {getIcon(item.result)}{' '}
                            <strong
                                className="cursor-pointer highlight"
                                onClick={() =>
                                    handleModifyResources(item.resources)
                                }
                                role="button"
                                aria-label={`Modify resources for roll ${item.range}`}
                            >
                                Roll {item.range}
                            </strong>{' '}
                            → {item.result}
                            <ul className="list-margin">
                                {item.resources &&
                                    Object.entries(item.resources).map(
                                        (
                                            [key, value],
                                            resourceIndex: number
                                        ) => (
                                            <li key={resourceIndex}>
                                                {key === 'Nuyen'
                                                    ? `${value > 0 ? `+${value}` : value}.000`
                                                    : `${value > 0 ? `+${value}` : value}`}{' '}
                                                {key}
                                            </li>
                                        )
                                    )}

                                {item.effects &&
                                    item.effects.map((effect, effectIndex) => (
                                        <li
                                            key={`${item.range}-effect-${effectIndex}`}
                                        >
                                            {effect}
                                        </li>
                                    ))}
                            </ul>
                        </>
                    </div>
                ))}
        </div>
    )
}

export default ResourceDetail
