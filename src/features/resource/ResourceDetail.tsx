import Card from '@/components/Card'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getResourceByTag } from './resourceData'
import useResourceStore from './resourceStore'
import { ResourceRoll } from './ResourceType'
import { HighlightClass } from '@/lib/Highlight'

function ResourceDetail() {
    const { resourceTag } = useParams()
    const updateResource = useResourceStore((state) => state.updateResource)
    const [resource, setResource] = useState<any | null>(null)

    useEffect(() => {
        const resourceData = getResourceByTag(resourceTag as string)
        setResource(resourceData ?? null)
    }, [resourceTag])

    if (!resource) return <></>

    return (
        <Card title={resource.title}>
            <p>{resource.description}</p>

            <ul>
                {resource.rolls.map((roll: ResourceRoll) => {
                    return (
                        <li key={roll.range}>
                            {roll.range}: <strong>{roll.title}</strong> –{' '}
                            {roll.description}
                            <ul>
                                {roll.resources.map(
                                    (resource: string, index: number) => {
                                        return (
                                            <li key={index}>
                                                <span
                                                    onClick={() =>
                                                        updateResource(resource)
                                                    }
                                                    className={`${HighlightClass(resource)}`}
                                                >
                                                    {resource}
                                                </span>
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </Card>
    )
}

export default ResourceDetail
