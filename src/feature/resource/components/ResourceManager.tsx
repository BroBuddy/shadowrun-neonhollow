import useResourceStore from '@/feature/resource/store/resourceStore'

const resourceIcons: Record<string, string> = {
    Nuyen: '💰',
    Health: '❤️',
    Energy: '🔋',
    Edge: '⭐',
    Intel: '💡',
    Heat: '🔥',
}

const ResourceManager = () => {
    const resources = useResourceStore((state) => state.resources)

    return (
        <>
            {Object.entries(resources).map(([key, value]) => (
                <div key={key} className="w-1/6 text-center p-1">
                    <div className="mb-1 text-xs">
                        <strong className="highlight mr-1">
                            {resourceIcons[key]}
                        </strong>
                        <span>{key === 'Nuyen' ? `${value}k` : value}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ResourceManager
