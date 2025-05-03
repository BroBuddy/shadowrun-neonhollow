import InRow from '../../../components/InRow'

const StatRow = ({
    stat,
    main,
    temp,
    onModify,
}: {
    stat: string
    main: number
    temp: number
    onModify: (attribute: string, value: number, isTemporary: boolean) => void
}) => {
    return (
        <tr>
            <td>
                <InRow>
                    <button
                        onClick={() => onModify(attribute, -1, false)}
                        className="highlight text-xl"
                    >
                        ⊖
                    </button>
                    <span className="w-4 text-center">{main}</span>
                    <button
                        onClick={() => onModify(attribute, 1, false)}
                        className="highlight text-xl"
                    >
                        ⊕
                    </button>
                </InRow>
            </td>
            <td className="w-40 text-center">
                <strong>{attribute}</strong>
            </td>
            <td>
                <InRow>
                    <button
                        onClick={() => onModify(attribute, -1, true)}
                        className="highlight text-xl"
                    >
                        ⊖
                    </button>
                    <span className="w-4 text-center">{temp}</span>
                    <button
                        onClick={() => onModify(attribute, 1, true)}
                        className="highlight text-xl"
                    >
                        ⊕
                    </button>
                </InRow>
            </td>
        </tr>
    )
}

export default StatRow
