import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBackgroundById, isValidBackground } from '../backgroundData'
import FadeIn from '@/components/FadeIn'
import useAttributeStore from '@/feature/attribute/store/attributeStore'
import { formatValue } from '@/lib/helper'

function BackgroundDetail() {
    const { id } = useParams()
    const modifyAttributes = useAttributeStore(
        (state) => state.modifyAttributes
    )
    const [isApplied, setIsApplied] = useState<boolean>(false)
    const data = useMemo(() => getBackgroundById(id as string), [id])

    if (!data || !isValidBackground(id as string)) {
        return (
            <>
                <Headline>Invalid Background</Headline>
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
                <FadeIn>
                    <p>{data.description}</p>
                    <p>
                        <strong className="highlight">
                            Attribute Adjustments:
                        </strong>
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
                                isApplied
                                    ? 'text-gray-500 cursor-not-allowed'
                                    : ''
                            }`}
                            onClick={handleModifyAttributes}
                        >
                            {isApplied ? 'Applied' : 'Apply Attributes'}
                        </span>
                    </p>
                </FadeIn>
            </Card>
        </>
    )
}

export default BackgroundDetail
