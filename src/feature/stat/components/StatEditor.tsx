import InRow from '@/components/InRow'
import useStatStore from '@/feature/stat/store/statStore'

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
                        <tr key={stat}>
                            <td>
                                <strong>{stat}</strong>
                            </td>
                            <td>
                                <InRow>
                                    <button
                                        className="highlight text-xl"
                                        onClick={() => handleModify(stat, -1)}
                                    >
                                        ⊖
                                    </button>
                                    <span className="w-6 text-center">
                                        {stat === 'Nuyen' ? `${value}k` : value}
                                    </span>
                                    <button
                                        className="highlight text-xl"
                                        onClick={() => handleModify(stat, 1)}
                                    >
                                        ⊕
                                    </button>
                                </InRow>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StatEditor
