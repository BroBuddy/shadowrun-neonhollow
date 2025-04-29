import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getBackgroundById, isValidBackground } from '../backgroundData'

function BackgroundDetail() {
    const { id } = useParams()
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

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <p>{data.description}</p>
                <p>
                    <strong className="highlight">
                        Attribute Adjustments:
                    </strong>
                </p>
                <ul className="list-margin">
                    {data.attributes.map((attribute: string, index: number) => (
                        <li key={index}>{attribute}</li>
                    ))}
                </ul>
                <p>Apply the bonuses to your player sheet.</p>
            </Card>
        </>
    )
}

export default BackgroundDetail
