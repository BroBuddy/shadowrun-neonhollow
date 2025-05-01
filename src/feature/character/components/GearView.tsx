import { useMemo, useState } from 'react'
import { getCharacterEquipments } from '../characterData'
import { Equipment } from '../CharacterType'
import Card from '@/components/Card'
import useAttributeStore from '@/feature/attribute/store/attributeStore'
import { Attributes } from '@/feature/metatype/MetatypeType'
import { formatValue } from '@/lib/helper'

function GearView() {
    const equipments = useMemo(() => getCharacterEquipments(), [])
    const [equipmentClicked, setEquipmentClicked] = useState<boolean>(false)
    const modifyAttributes = useAttributeStore(
        (state) => state.modifyAttributes
    )

    const handleModifyAttributes = (attributes: Attributes) => {
        if (!equipmentClicked) {
            modifyAttributes(attributes)
            setEquipmentClicked(true)
        }
    }

    return (
        <Card>
            <p>
                <strong className="highlight">Gear:</strong>
            </p>
            <p>Choose one item for free from the Fixer's Workshop:</p>
            <ul className="list-margin">
                {equipments.length > 0 ? (
                    equipments.map((item: Equipment, index: number) => (
                        <li key={index}>
                            <strong
                                className={`highlight cursor-pointer ${
                                    equipmentClicked
                                        ? 'text-gray-500 cursor-not-allowed'
                                        : ''
                                }`}
                                onClick={() =>
                                    handleModifyAttributes(item.attributes)
                                }
                            >
                                {item.name}:
                            </strong>{' '}
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
