import useStatStore from '@/feature/stat/store/statStore'
import StatRow from './StatRow'

const StatEditor = () => {
    const stats = useStatStore((state) => state.stats)
    const modifyStats = useStatStore((state) => state.modifyStats)
    const statEntries = Object.entries(stats)
    const leftStats = statEntries.slice(0, 3)
    const rightStats = statEntries.slice(3, 6)

    const handleModify = (stat: string, value: number) => {
        modifyStats({ [stat]: value })
    }

    return (
        <div className="flex justify-center w-screen gap-5 my-5">
            <div className="w-1/2">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Stat</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leftStats.map(([stat, value]) => (
                            <StatRow
                                key={stat}
                                stat={stat}
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
                            <th>Stat</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rightStats.map(([stat, value]) => (
                            <StatRow
                                key={stat}
                                stat={stat}
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

export default StatEditor
