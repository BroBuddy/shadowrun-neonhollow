import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getResourceByTag } from '../resourceData'
import { ResourceRoll, Resource as ResourceType } from '../ResourceType'
import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { getIcon } from '@/lib/icon'

function ResourceDetail() {
    const { tag } = useParams()
    const data = useMemo(() => {
        return getResourceByTag(tag as string) as ResourceType
    }, [tag])

    if (!data || !data.rollList) {
        return <p>No resource data available.</p>
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <p>The number determines the outcome of the action.</p>
                {data.rollList &&
                    data.rollList.map((item: ResourceRoll) => (
                        <div key={item.range} className="roll-section">
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
                                        <li
                                            key={`${item.range}-${effectIndex}`}
                                        >
                                            {effect}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
            </Card>
        </>
    )
}

export default ResourceDetail
