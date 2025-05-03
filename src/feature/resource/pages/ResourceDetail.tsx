import { useMemo } from 'react'
import { getResourceByTag } from '../resourceData'
import { ResourceRoll, Resource as ResourceType } from '../ResourceType'
import { getIcon } from '@/lib/helper'
import useResourceStore from '../store/resourceStore'
import { Resources } from '@/feature/character/CharacterType'

type ResourceDetailProps = {
    tag?: string
}

function ResourceDetail({ tag }: ResourceDetailProps) {
    const modifyResources = useResourceStore((state) => state.modifyResources)
    const data = useMemo(() => {
        return getResourceByTag(tag as string) as ResourceType
    }, [tag])

    const handleModifyResources = (resources?: Resources) => {
        if (resources) {
            modifyResources(resources)
        }
    }

    if (!data || !data.rollList) {
        return <p>No resource data available.</p>
    }

    return (
        <div>
            <p>The roll determines the outcome of the action.</p>
            {data.rollList &&
                data.rollList.map((item: ResourceRoll) => (
                    <div key={item.range}>
                        <p
                            className="cursor-pointer"
                            onClick={() =>
                                handleModifyResources(item.resources)
                            }
                        >
                            {getIcon(item.range)}{' '}
                            <strong className="highlight">
                                Roll {item.range}
                            </strong>{' '}
                            → {item.result}
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
                                item.effects.map((effect, effectIndex) => (
                                    <li
                                        key={`${item.range}-effect-${effectIndex}`}
                                    >
                                        {effect}
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
        </div>
    )
}

export default ResourceDetail
