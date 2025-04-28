import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { getResourceData } from '../resourceData'
import { Resource as ResourceType } from '../ResourceType'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'

function Resource() {
    const resourceData = useMemo(() => getResourceData(), [])

    return (
        <>
            <Headline>Resources</Headline>

            <Card>
                <p>Here are the resources featured in this game:</p>
                <ul>
                    {resourceData.map((item: ResourceType) => (
                        <li key={item.tag}>
                            <Link to={`/resource/${item.tag}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Card>
        </>
    )
}

export default Resource
