import useAttributeStore from '@/store/attributeStore'
import InRow from './InRow'

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
        <div className="flex justify-center w-screen">
            <table>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Main</th>
                        <th>Temporary</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(attributes).map(
                        ([attribute, [main, temp]]) => (
                            <tr key={attribute}>
                                <td>
                                    <strong>{attribute}</strong>
                                </td>
                                <td>
                                    <InRow>
                                        <button
                                            onClick={() =>
                                                handleModify(
                                                    attribute,
                                                    -1,
                                                    false
                                                )
                                            }
                                            className="highlight text-xl"
                                        >
                                            [-]
                                        </button>
                                        <span>{main}</span>
                                        <button
                                            onClick={() =>
                                                handleModify(
                                                    attribute,
                                                    1,
                                                    false
                                                )
                                            }
                                            className="highlight text-xl"
                                        >
                                            [+]
                                        </button>
                                    </InRow>
                                </td>
                                <td>
                                    <InRow>
                                        <button
                                            onClick={() =>
                                                handleModify(
                                                    attribute,
                                                    -1,
                                                    true
                                                )
                                            }
                                            className="highlight text-xl"
                                        >
                                            [-]
                                        </button>
                                        <span>{temp}</span>
                                        <button
                                            onClick={() =>
                                                handleModify(attribute, 1, true)
                                            }
                                            className="highlight text-xl"
                                        >
                                            [+]
                                        </button>
                                    </InRow>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AttributeEditor
