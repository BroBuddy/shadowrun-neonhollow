import { formatValue } from '@/lib/helper'
import ArchetypeBackground from './ArchetypeBackground'
import { useArchetypeData } from '../hooks/useArchetypeData'

type Props = {
    id: number
}

function ArchetypeDetail({ id }: Props) {
    const { data, isValidData } = useArchetypeData(id)

    if (!data || isValidData) {
        return (
            <p>The tag you provided is invalid.</p>
        )
    }

    return (
        <>
            <p>{data.description}</p>
            <p><strong>Attributes:</strong></p>

            <ul className="list-margin">
                {Object.entries(data.attributes).map(
                    ([attribute, value]) => (
                        <li key={attribute}>
                            {attribute}: {formatValue(value)}
                        </li>
                    )
                )}
            </ul>

            <ArchetypeBackground id={id} />
        </>
    )
}

export default ArchetypeDetail
