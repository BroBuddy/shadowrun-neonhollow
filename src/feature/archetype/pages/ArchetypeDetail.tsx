import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArchetypeByTag, isValidArchetype } from '../archtypeData'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { Archetype } from '../ArchetypeType'
import useAttributeStore from '@/store/attributeStore'
import { formatValue } from '@/lib/helper'

function ArchetypeDetail() {
    const { tag } = useParams()
    const modifyAttributes = useAttributeStore(
        (state) => state.modifyAttributes
    )
    const [isApplied, setIsApplied] = useState<boolean>(false)
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

    const handleModifyAttributes = () => {
        if (!isApplied) {
            modifyAttributes(data.attributes)
            setIsApplied(true)
        }
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <p>{data.description}</p>
                <p>
                    <strong className="highlight">Bonus Attributes:</strong>
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
                <p>
                    &#8594;{' '}
                    <span
                        className={`cursor-pointer highlight ${
                            isApplied ? 'text-gray-500 cursor-not-allowed' : ''
                        }`}
                        onClick={handleModifyAttributes}
                    >
                        {isApplied ? 'Applied' : 'Apply Attributes'}
                    </span>
                </p>
            </Card>
        </>
    )
}

export default ArchetypeDetail
