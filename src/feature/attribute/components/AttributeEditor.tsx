import useAttributeStore from '@/feature/attribute/store/attributeStore'
import AttributeRow from './AttributeRow'

const AttributeEditor = () => {
    const attributes = useAttributeStore((state) => state.attributes)
    const resetTemporaryAttributes = useAttributeStore(
        (state) => state.resetTemporaryAttributes
    )
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
        <div className="flex flex-col items-center w-screen">
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

            <button
                className="mt-5 px-4 py-2 highlight"
                onClick={resetTemporaryAttributes}
            >
                Reset Temporary Attributes
            </button>
        </div>
    )
}

export default AttributeEditor
