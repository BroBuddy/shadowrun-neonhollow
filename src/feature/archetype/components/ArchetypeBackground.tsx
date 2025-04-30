import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { useEffect, useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { getBackgroundById, isValidBackground } from '../backgroundData'
import FadeIn from '@/components/FadeIn'
import useAttributeStore from '@/feature/attribute/store/attributeStore'
import { formatValue, rollDice } from '@/lib/helper'

const ArchetypeBackground = () => {
    const { id } = useParams()
    const hasModified = useRef<boolean>(false)
    const backgroundId = useMemo(() => String(id) + rollDice(), [id])
    const modifyAttributes = useAttributeStore(
        (state) => state.modifyAttributes
    )
    const data = useMemo(
        () => getBackgroundById(backgroundId as string),
        [backgroundId]
    )
    const isValidData = data && isValidBackground(backgroundId as string)

    useEffect(() => {
        if (
            data &&
            isValidBackground(backgroundId as string) &&
            !hasModified.current
        ) {
            modifyAttributes(data.attributes)
            hasModified.current = true
        }
    }, [data, backgroundId, modifyAttributes])

    if (!isValidData) {
        return (
            <>
                <Headline>Invalid Background</Headline>
                <Card>
                    <p>The tag you provided is invalid.</p>
                </Card>
            </>
        )
    }

    return (
        <>
            <FadeIn delay={2000}>
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
                                    {attribute}: {formatValue(value as number)}
                                </li>
                            )
                        )}
                    </ul>
                </Card>
            </FadeIn>
        </>
    )
}

export default ArchetypeBackground
