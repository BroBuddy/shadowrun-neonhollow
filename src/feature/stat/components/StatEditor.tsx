import useStatStore from '@/feature/stat/store/statStore'
import StatRow from './StatRow'

const StatEditor = () => {
    const stats = useStatStore((state) => state.stats)
    const modifyStats = useStatStore((state) => state.modifyStats)

    const handleModify = (stat: string, value: number) => {
        modifyStats({ [stat]: value })
    }

    return (
        <div className="flex flex-col items-center w-screen my-5">
            <table>
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(stats).map(([stat, value]) => (
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
    )
}

export default StatEditor
