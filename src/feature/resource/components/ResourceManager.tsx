import useResourceStore from '@/feature/resource/store/resourceStore'

const resourceIcons: Record<string, string> = {
    Nuyen: '💰',
    Health: '❤️',
    Energy: '🔋',
    Edge: '⭐',
    Intel: '💡',
    Heat: '🔥', 
    Days: '🕒',
    Progress: '🏆',
}

const ResourceManager = () => {
    const resources = useResourceStore((state) => state.resources)
    const isStoreEmpty = useResourceStore.getState().isEmptyStore()

    if (isStoreEmpty) {
        return <></>
    }

    return (
        <div className="grid grid-cols-8 w-full">
            {Object.entries(resources).map(([key, value]) => (
                <div key={key} className="text-center py-1">
                    <div className="mb-1 text-xs">
                        <strong className="highlight mr-1">
                            {resourceIcons[key]}
                        </strong>
                        <span>{key === 'Nuyen' ? `${value}k` : value}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ResourceManager
