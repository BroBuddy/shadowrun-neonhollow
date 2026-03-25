import { Mechanic } from '../types/MechanicType'
import PopUp from '@/components/Popup'
import MechanicDetail from '../pages/MechanicDetail'
import { getMechanicData } from '../services/MechanicService'

function MechanicView() {
    const data = getMechanicData() as Mechanic[]

    return (
        <section>
            <p><strong>Know the Basics:</strong></p>
            <p><em>"Tap any highlighted text to apply its effect."</em></p>

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
