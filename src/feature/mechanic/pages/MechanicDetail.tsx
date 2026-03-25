import { Mechanic } from '../types/MechanicType'
import { getMechanicByTag } from '../services/MechanicService'

type MechanicDetailProps = {
    tag?: string
}

function MechanicDetail({ tag }: MechanicDetailProps) {
    const data = getMechanicByTag(tag as string) as Mechanic

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
