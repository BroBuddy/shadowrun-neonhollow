import { useMemo } from 'react'
import { getCharacterEquipments } from '../characterData'
import { Equipment } from '../CharacterType'
import Card from '@/components/Card'

function GearView() {
    const equipments = useMemo(() => getCharacterEquipments(), [])

    return (
        <Card>
            <p>
                <strong className="highlight">Gear:</strong>
            </p>
            <p>Choose one item for free from the Fixer's Workshop:</p>
            <ul className="list-margin">
                {equipments.length > 0 ? (
                    equipments.map((equipment: Equipment, index: number) => (
                        <li key={index}>
                            <strong>{equipment.name}:</strong> {equipment.bonus}
                        </li>
                    ))
                ) : (
                    <li>No equipment available.</li>
                )}
            </ul>

            <p>Apply the bonus to your player sheet.</p>
        </Card>
    )
}

export default GearView
