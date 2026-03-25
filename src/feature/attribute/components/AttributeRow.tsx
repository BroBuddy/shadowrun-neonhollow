import InRow from '../../../components/InRow'

const AttributeRow = ({
    attribute,
    main,
    onModify,
}: {
    attribute: string
    main: number
    onModify: (attribute: string, value: number) => void
}) => {
    return (
        <tr>
            <td className="w-40 text-center">
                <strong>{attribute}</strong>
            </td>
            <td>
                <InRow>
                    <button
                        onClick={() => onModify(attribute, -1)}
                        className="highlight text-xl"
                    >
                        ⊖
                    </button>
                    <span className="w-4 text-center">{main}</span>
                    <button
                        onClick={() => onModify(attribute, 1)}
                        className="highlight text-xl"
                    >
                        ⊕
                    </button>
                </InRow>
            </td>
        </tr>
    )
}

export default AttributeRow