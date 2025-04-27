import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getResourceByTag } from '../resourceData'
import { ResourceRoll, Resource as ResourceType } from '../ResourceType'
import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { getIcon } from '@/lib/icon'

function ResourceDetail() {
    const { resourceTag } = useParams()
    const [resource, setResource] = useState<ResourceType | null>(null)

    useEffect(() => {
        const resourceItem = getResourceByTag(resourceTag as string)
        setResource(resourceItem as ResourceType)
    }, [resourceTag])

    if (!resource) {
        return <></>
    }

    return (
        <>
            <Headline>{resource.title}</Headline>
            <Card>
                <p>The number determines the outcome of the action.</p>
                {resource.rollList &&
                    resource.rollList.map(
                        (roll: ResourceRoll, index: number) => (
                            <div key={index} className="roll-section">
                                <p>
                                    {getIcon(roll.range)}{' '}
                                    <strong className="highlight">
                                        Roll {roll.range}
                                    </strong>{' '}
                                    → {roll.result}
                                </p>
                                <ul className="list-margin">
                                    {roll.effects.map(
                                        (
                                            effect: string,
                                            effectIndex: number
                                        ) => (
                                            <li key={effectIndex}>{effect}</li>
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

export default ResourceDetail
