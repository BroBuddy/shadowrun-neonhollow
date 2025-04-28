import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { getMetatypeByTag } from '../metatypeData'
import { Metatype } from '../MetatypeType'

function MetatypeDetail() {
    const { tag } = useParams()
    const data = useMemo(() => {
        return getMetatypeByTag(tag as string) as Metatype
    }, [tag])

    if (!data) {
        return <></>
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <p className="flex items-center justify-center">
                    <img src={`/images/${data.title}.jpg`} alt={data.title} />
                </p>
                <p>{data.description}</p>
                <p>
                    <strong className="highlight">Starting Attributes:</strong>
                </p>
                <ul className="list-margin">
                    {Object.entries(data.startingAttributes).map(
                        ([attribute, value]) => (
                            <li key={attribute}>
                                {attribute}: {value}
                            </li>
                        )
                    )}
                </ul>
                <p>Apply the bonuses to your player sheet.</p>
            </Card>
        </>
    )
}

export default MetatypeDetail
