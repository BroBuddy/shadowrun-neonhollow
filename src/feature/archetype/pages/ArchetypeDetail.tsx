import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import useAttributeStore from '@/feature/attribute/store/attributeStore'
import { formatValue } from '@/lib/helper'
import FadeIn from '@/components/FadeIn'
import ArchetypeBackground from '../components/ArchetypeBackground'
import { useArchetypeData } from '../hooks/useArchetypeData'

function ArchetypeDetail() {
    const { id } = useParams()
    const hasModified = useRef<boolean>(false)
    const { data, isValidData } = useArchetypeData(id)
    const modifyAttributes = useAttributeStore(
        (state) => state.modifyAttributes
    )

    useEffect(() => {
        if (!data || !isValidData || hasModified.current) return
        modifyAttributes(data.attributes)
        hasModified.current = true
    }, [data, isValidData, id, modifyAttributes])

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
            <FadeIn delay={1000}>
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
            </FadeIn>

            <ArchetypeBackground />
        </>
    )
}

export default ArchetypeDetail
