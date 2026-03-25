import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { Resource as ResourceType } from '../types/ResourceType'
import { Link } from 'react-router-dom'
import { getResourceData } from '../services/ResourceService'

function Resource() {
    const resourceData = getResourceData()

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
