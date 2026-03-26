import ResourceRow from './ResourceRow'
import useResourceStore from '@/feature/resource/store/resourceStore'

const ResourceEditor = () => {
  const resources = useResourceStore(state => state.resources)
  const modifyResources = useResourceStore(state => state.modifyResources)

  const entries = Object.entries(resources)
  const halfResources = Math.ceil(entries.length / 2)
  const firstResources = entries.slice(0, halfResources)
  const secondResources = entries.slice(halfResources)
    
  const handleModify = (resource: string, value: number) => {
    modifyResources({ [resource]: value })
  }

  const renderTable = (data: [string, number][]) => (
    <table className="w-full">
      <thead>
        <tr>
          <th style={{ width: '140px' }}>Resource</th>
          <th style={{ width: '90px' }}>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map(([name, value]) => (
          <ResourceRow
            key={name}
            resource={name}
            value={value}
            onModify={handleModify}
          />
        ))}
      </tbody>
    </table>
  )

  return (
    <div className="flex justify-center gap-5 w-full my-5">
      <div className="w-1/2">{renderTable(firstResources)}</div>
      <div className="w-1/2">{renderTable(secondResources)}</div>
    </div>
  )
}

export default ResourceEditor