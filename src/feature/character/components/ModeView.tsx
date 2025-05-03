import Card from '@/components/Card'
import { Mode as ModeType } from '../CharacterType'
import { getCharacterModes } from '../characterData'
import { useMemo } from 'react'
import useStatStore from '@/feature/stat/store/statStore'

function ModeView() {
    const modes = useMemo(() => getCharacterModes(), [])
    const setStats = useStatStore((state) => state.setStats)

    const handleModeSelect = (stats: Record<string, number>) => {
        setStats(stats)
    }
    return (
        <Card>
            <p>
                <strong className="highlight">Mode:</strong>
            </p>
            <p>The mode grants you starting resources:</p>
            <ul className="list-margin">
                {modes.map((item: ModeType, index: number) => (
                    <li key={index}>
                        <strong
                            className="cursor-pointer highlight"
                            onClick={() => handleModeSelect(item.stats)}
                        >
                            {item.name}:
                        </strong>
                        <ul>
                            {Object.entries(item.stats).map(
                                ([statName, statValue], attrIndex) => (
                                    <li key={attrIndex}>
                                        {statName}:{' '}
                                        {statName === 'Nuyen'
                                            ? `${statValue}k`
                                            : statValue}
                                    </li>
                                )
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default ModeView
