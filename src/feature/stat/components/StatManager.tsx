import useStatStore from '@/feature/stat/store/statStore'

const statIcons: Record<string, string> = {
    Nuyen: '💰',
    Health: '❤️',
    Energy: '🔋',
    Edge: '⭐',
    Intel: '💡',
    Heat: '🔥',
}

const StatManager = () => {
    const stats = useStatStore((state) => state.stats)

    return (
        <>
            {Object.entries(stats).map(([key, value]) => (
                <div key={key} className="w-1/6 text-center p-1">
                    <div className="mb-1 text-xs">
                        <strong className="highlight mr-1">
                            {statIcons[key]}
                        </strong>
                        <span>{key === 'Nuyen' ? `${value}k` : value}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default StatManager
