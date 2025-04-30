import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getBackgroundById, isValidBackground } from '../backgroundData'
import FadeIn from '@/components/FadeIn'
import useAttributeStore from '@/store/attributeStore'
import { formatValue } from '@/lib/helper'

function BackgroundDetail() {
    const { id } = useParams()
    const modifyAttributes = useAttributeStore(
        (state) => state.modifyAttributes
    )
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
        modifyAttributes(data.attributes)
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
                            className="cursor-pointer highlight"
                            onClick={handleModifyAttributes}
                        >
                            Apply Attributes
                        </span>
                    </p>
                </FadeIn>
            </Card>
        </>
    )
}

export default BackgroundDetail
