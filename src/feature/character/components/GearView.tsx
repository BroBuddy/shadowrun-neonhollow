import { useMemo } from 'react'
import {  } from '../data/characterData'
import Card from '@/components/Card'
import { formatValue } from '@/lib/helper'
import { Equipment } from '../types/CharacterType'
import { getCharacterEquipments } from '../services/CharacterService'

function GearView() {
    const equipments = useMemo(() => getCharacterEquipments(), [])

    return (
        <Card>
            <p>
                <strong>Gear:</strong>
            </p>

            <p>Choose one item for free from the Fixer's Workshop:</p>

            <ul className="list-margin">
                {equipments.length > 0 ? (
                    equipments.map((item: Equipment, index: number) => (
                        <li key={index}>
                            <strong className="font-bold">{item.name}:</strong>{' '}
                            {Object.entries(item.attributes).map(
                                ([attribute, value]) => (
                                    <span key={attribute}>
                                        {formatValue(value)} {attribute}
                                    </span>
                                )
                            )}
                        </li>
                    ))
                ) : (
                    <li>No equipment available.</li>
                )}
            </ul>
        </Card>
    )
}

export default GearView
