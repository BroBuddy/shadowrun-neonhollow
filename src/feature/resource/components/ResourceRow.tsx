import InRow from '@/components/InRow'

interface ResourceRowProps {
  resource: string
  value: number
  onModify: (resource: string, delta: number) => void
}

const ResourceRow = ({ resource, value, onModify }: ResourceRowProps) => {
  const handleIncrement = () => onModify(resource, 1)
  const handleDecrement = () => onModify(resource, -1)

  return (
    <tr>
      <td>
        <strong>{resource}</strong>
      </td>
      <td>
        <InRow>
          <button
            className="highlight text-xl"
            onClick={handleDecrement}
            aria-label={`Decrease ${resource}`}
          >
            ⊖
          </button>

          <span className="w-6 text-center">
            {resource === 'Nuyen' ? `${value}k` : value}
          </span>

          <button
            className="highlight text-xl"
            onClick={handleIncrement}
            aria-label={`Increase ${resource}`}
          >
            ⊕
          </button>
        </InRow>
      </td>
    </tr>
  )
}

export default ResourceRow