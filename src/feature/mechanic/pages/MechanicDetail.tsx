import { useMemo } from 'react'
import { Mechanic } from '../MechanicType'
import { getMechanicByTag } from '../mechanicData'

type MechanicDetailProps = {
    tag?: string
}

function MechanicDetail({ tag }: MechanicDetailProps) {
    const data = useMemo(() => {
        return getMechanicByTag(tag as string) as Mechanic
    }, [tag])

    if (!data) {
        return <></>
    }

    return (
        <>
            <p>{data.description}</p>
            <ul className="list-margin">
                {data.list.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default MechanicDetail
