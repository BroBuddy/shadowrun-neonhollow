import { useMemo } from 'react'
import { getResourceByTag } from '../resourceData'
import { ResourceRoll, Resource as ResourceType } from '../ResourceType'
import { getIcon } from '@/lib/helper'

type ResourceDetailProps = {
    tag?: string
}

function ResourceDetail({ tag }: ResourceDetailProps) {
    const data = useMemo(() => {
        return getResourceByTag(tag as string) as ResourceType
    }, [tag])

    if (!data || !data.rollList) {
        return <p>No resource data available.</p>
    }

    return (
        <div>
            <p>The roll determines the outcome of the action.</p>
            {data.rollList &&
                data.rollList.map((item: ResourceRoll) => (
                    <div key={item.range}>
                        <p>
                            {getIcon(item.range)}{' '}
                            <strong className="highlight">
                                Roll {item.range}
                            </strong>{' '}
                            → {item.result}
                        </p>
                        <ul className="list-margin">
                            {item.effects.map(
                                (effect: string, effectIndex: number) => (
                                    <li key={`${item.range}-${effectIndex}`}>
                                        {effect}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                ))}
        </div>
    )
}

export default ResourceDetail
