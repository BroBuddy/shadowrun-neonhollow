import InRow from '@/components/InRow'

type ResourceRowProps = {
    resource: string
    value: number
    onModify: (resource: string, value: number) => void
}

const ResourceRow = ({ resource, value, onModify }: ResourceRowProps) => {
    return (
        <tr key={resource}>
            <td>
                <strong>{resource}</strong>
            </td>
            <td>
                <InRow>
                    <button
                        className="highlight text-xl"
                        onClick={() => onModify(resource, -1)}
                    >
                        ⊖
                    </button>
                    <span className="w-6 text-center">
                        {resource === 'Nuyen' ? `${value}k` : value}
                    </span>
                    <button
                        className="highlight text-xl"
                        onClick={() => onModify(resource, 1)}
                    >
                        ⊕
                    </button>
                </InRow>
            </td>
        </tr>
    )
}

export default ResourceRow
