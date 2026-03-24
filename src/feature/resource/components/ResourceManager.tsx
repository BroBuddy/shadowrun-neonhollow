import useResourceStore from '@/feature/resource/store/resourceStore'

const resourceIcons: Record<string, string> = {
    Nuyen: '💰',
    Health: '❤️',
    Energy: '🔋',
    Edge: '⭐',
    Intel: '💡',
    Heat: '🔥', 
    Days: '🕒',
}

const ResourceManager = () => {
    const resources = useResourceStore((state) => state.resources)
    const isStoreEmpty = useResourceStore((state) => state.isEmptyStore())
    const displayResources = Object.entries(resources).filter(([key]) => key !== 'Progress')

    if (isStoreEmpty) {
        return <></>
    }

    return (
        <div className="grid grid-cols-7 w-full">
            {displayResources.map(([key, value]) => (
                <div key={key} className="text-center p-1">
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
