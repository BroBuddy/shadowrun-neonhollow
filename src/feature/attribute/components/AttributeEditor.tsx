import useAttributeStore from '@/feature/attribute/store/attributeStore'
import AttributeRow from './AttributeRow'

const AttributeEditor = () => {
    const attributes = useAttributeStore((state) => state.attributes)

    const modifyAttributes = useAttributeStore(
        (state) => state.modifyAttributes
    )

    const handleModify = (attribute: string, value: number) => {
        modifyAttributes({ [attribute]: value }, false)
    }

    return (
        <div className="flex flex-col items-center w-full my-2">
            <div className="flex gap-8">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '140px' }}>Attribute</th>
                            <th style={{ width: '90px' }}>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {['Strength', 'Agility', 'Reaction'].map((attribute) => (
                            <AttributeRow
                                key={attribute}
                                attribute={attribute}
                                main={attributes[attribute][0]}
                                onModify={handleModify}
                            />
                        ))}
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '140px' }}>Attribute</th>
                            <th style={{ width: '90px' }}>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {['Logic', 'Intuition', 'Charisma'].map((attribute) => (
                            <AttributeRow
                                key={attribute}
                                attribute={attribute}
                                main={attributes[attribute][0]}
                                onModify={handleModify}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AttributeEditor
