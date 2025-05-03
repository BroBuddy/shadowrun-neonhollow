import ResourceRow from './ResourceRow'
import useResourceStore from '@/feature/resource/store/resourceStore'

const ResourceEditor = () => {
    const resources = useResourceStore((state) => state.resources)
    const modifyResources = useResourceStore((state) => state.modifyResources)
    const resourceEntries = Object.entries(resources)
    const leftResources = resourceEntries.slice(0, 3)
    const rightResources = resourceEntries.slice(3, 6)

    const handleModify = (resource: string, value: number) => {
        modifyResources({ [resource]: value })
    }

    return (
        <div className="flex justify-center w-screen gap-5 my-5">
            <div className="w-1/2">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Resource</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leftResources.map(([resource, value]) => (
                            <ResourceRow
                                key={resource}
                                resource={resource}
                                value={value}
                                onModify={handleModify}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="w-1/2">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Resource</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rightResources.map(([resource, value]) => (
                            <ResourceRow
                                key={resource}
                                resource={resource}
                                value={value}
                                onModify={handleModify}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ResourceEditor
