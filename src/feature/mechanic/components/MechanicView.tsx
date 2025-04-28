import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getMechanicData } from '../mechanicData'
import { Mechanic } from '../MechanicType'

function MechanicView() {
    const data = useMemo(() => {
        return getMechanicData() as Mechanic[]
    }, [])

    if (!data) {
        return <></>
    }

    return (
        <>
            <p>
                <strong>Know the Mechanics:</strong>
            </p>
            <ul className="list-margin">
                {data.map((item: Mechanic, index: number) => (
                    <li key={index}>
                        <Link to={`/mechanic/${item.tag}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MechanicView
