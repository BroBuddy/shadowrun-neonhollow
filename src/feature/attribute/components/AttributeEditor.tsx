import useAttributeStore from '@/feature/attribute/store/attributeStore'
import AttributeRow from './AttributeRow'

const AttributeEditor = () => {
    const attributes = useAttributeStore((state) => state.attributes)

    const modifyAttributes = useAttributeStore(
        (state) => state.modifyAttributes
    )

    const handleModify = (
        attribute: string,
        value: number,
        isTemporary: boolean
    ) => {
        modifyAttributes({ [attribute]: value }, isTemporary)
    }

    return (
        <div className="flex flex-col items-center w-full my-5">
            <table>
                <thead>
                    <tr>
                        <th>Main</th>
                        <th>Attribute</th>
                        <th>Temporary</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(attributes).map(
                        ([attribute, [main, temp]]) => (
                            <AttributeRow
                                key={attribute}
                                attribute={attribute}
                                main={main}
                                temp={temp}
                                onModify={handleModify}
                            />
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AttributeEditor
