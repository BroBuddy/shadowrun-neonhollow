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
        <section>
            <p>
                <strong>Know the Basics:</strong>
            </p>
            <ul className="list-margin">
                {data.map((item: Mechanic, index: number) => (
                    <li key={index}>
                        <Link to={`/mechanic/${item.tag}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default MechanicView
