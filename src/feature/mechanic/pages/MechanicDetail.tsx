import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Mechanic } from '../MechanicType'
import { getMechanicByTag } from '../mechanicData'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import FadeIn from '@/components/FadeIn'

function MechanicDetail() {
    const { tag } = useParams()
    const data = useMemo(() => {
        return getMechanicByTag(tag as string) as Mechanic
    }, [tag])

    if (!data) {
        return <></>
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <FadeIn>
                    <p>{data.description}</p>
                    <ul className="list-margin">
                        {data.list.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </FadeIn>
            </Card>
        </>
    )
}

export default MechanicDetail
