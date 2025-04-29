import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getArchetypeByTag, isValidArchetype } from '../archtypeData'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { Archetype } from '../ArchetypeType'

function ArchetypeDetail() {
    const { tag } = useParams()
    const data = useMemo(() => {
        return getArchetypeByTag(tag as string) as Archetype
    }, [tag])

    if (!data || !isValidArchetype(tag as string)) {
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
            <Headline>{data.title}</Headline>
            <Card>
                <p>{data.description}</p>
                <p>
                    <strong className="highlight">Bonus Attributes:</strong>
                </p>
                <ul>
                    {data.bonusAttributes.map(
                        (attribute: string, index: number) => (
                            <li key={index}>{attribute}</li>
                        )
                    )}
                </ul>
                <p>Apply the bonuses to your player sheet.</p>
            </Card>
        </>
    )
}

export default ArchetypeDetail
