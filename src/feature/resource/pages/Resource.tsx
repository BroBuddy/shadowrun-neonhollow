import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { getResourceData } from '../resourceData'
import { Resource as ResourceType } from '../ResourceType'
import { Link } from 'react-router-dom'

function Resource() {
    const resourceData = getResourceData()

    return (
        <>
            <Headline>Resources</Headline>

            <Card>
                <p>Here are the resources featured in this game:</p>
                <ul>
                    {resourceData.map(
                        (resource: ResourceType, index: number) => (
                            <li key={index}>
                                <Link to={`/resource/${resource.tag}`}>
                                    {resource.title}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </Card>
        </>
    )
}

export default Resource
