import { useMemo } from 'react'
import { getMechanicData } from '../mechanicData'
import { Mechanic } from '../MechanicType'
import PopUp from '@/components/Popup'
import MechanicDetail from '../pages/MechanicDetail'

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
                        <PopUp title={item.title}>
                            <MechanicDetail tag={item.tag} />
                        </PopUp>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default MechanicView
