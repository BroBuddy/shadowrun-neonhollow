import InRow from '@/components/InRow'

type StatRowProps = {
    stat: string
    value: number
    onModify: (stat: string, value: number) => void
}

const StatRow = ({ stat, value, onModify }: StatRowProps) => {
    return (
        <tr key={stat}>
            <td>
                <strong>{stat}</strong>
            </td>
            <td>
                <InRow>
                    <button
                        className="highlight text-xl"
                        onClick={() => onModify(stat, -1)}
                    >
                        ⊖
                    </button>
                    <span className="w-6 text-center">
                        {stat === 'Nuyen' ? `${value}k` : value}
                    </span>
                    <button
                        className="highlight text-xl"
                        onClick={() => onModify(stat, 1)}
                    >
                        ⊕
                    </button>
                </InRow>
            </td>
        </tr>
    )
}

export default StatRow
