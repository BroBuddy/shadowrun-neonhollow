import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getBackgroundById, isValidBackground } from '../backgroundData'
import { formatValue, rollDice } from '@/lib/helper'

const ArchetypeBackground = () => {
    const { id } = useParams()
    const backgroundId = useMemo(() => String(id) + rollDice(), [id])
    const data = useMemo(
        () => getBackgroundById(backgroundId as string),
        [backgroundId]
    )
    const isValidData = data && isValidBackground(backgroundId as string)

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
        </>
    )
}

export default ArchetypeBackground
