import { useParams } from 'react-router-dom'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { formatValue } from '@/lib/helper'
import ArchetypeBackground from '../components/ArchetypeBackground'
import { useArchetypeData } from '../hooks/useArchetypeData'

function ArchetypeDetail() {
    const { id } = useParams()
    const { data, isValidData } = useArchetypeData(id)

    if (!data || isValidData) {
        return (
            <>
                <Headline>Invalid Archetype</Headline>
                <Card>
                    <p>The tag you provided is invalid.</p>
                </Card>
            </>
        )
    }

    return (
        <>
            <Headline>Archetype &amp; Background</Headline>
            <Card>
                <p>
                    <strong className="highlight">{data.title}:</strong>
                </p>
                <p>{data.description}</p>
                <p>
                    <strong className="highlight">Attributes:</strong>
                </p>
                <ul className="list-margin">
                    {Object.entries(data.attributes).map(
                        ([attribute, value]) => (
                            <li key={attribute}>
                                {attribute}: {formatValue(value)}
                            </li>
                        )
                    )}
                </ul>
            </Card>

            <ArchetypeBackground />
        </>
    )
}

export default ArchetypeDetail
