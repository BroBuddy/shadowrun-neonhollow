import { useMemo } from 'react'
import { formatValue, rollDice } from '@/lib/helper'
import { getBackgroundById, isValidBackground } from '../services/BackgroundService'

type Props = {
    id: number
}

const ArchetypeBackground = ({ id }: Props) => {
    const backgroundId = useMemo(() => String(id) + rollDice(), [id])
    const data = getBackgroundById(backgroundId)
    const isValidData = data && isValidBackground(backgroundId as string)

    if (!isValidData) {
        return (
            <p>The tag you provided is invalid.</p>
        )
    }

    return (
        <>
            <p className='mt-4'>
                <strong className="highlight">{data.title}:</strong>
            </p>
            <p>{data.description}</p>
            <p><strong>Attributes:</strong></p>

            <ul className="list-margin">
                {Object.entries(data.attributes).map(
                    ([attribute, value]) => (
                        <li key={attribute}>
                            {attribute}: {formatValue(value as number)}
                        </li>
                    )
                )}
            </ul>
        </>
    )
}

export default ArchetypeBackground
