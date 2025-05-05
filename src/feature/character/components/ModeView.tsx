import { Mode as ModeType } from '../CharacterType'
import { getCharacterModes } from '../characterData'
import { useMemo } from 'react'
import useResourceStore from '@/feature/resource/store/resourceStore'

function ModeView() {
    const modes = useMemo(() => getCharacterModes(), [])
    const setStats = useResourceStore((state) => state.setResources)

    const handleModeSelect = (stats: Record<string, number>) => {
        setStats(stats)
    }
    return (
        <>
            <p>The mode grants you starting resources.</p>
            {modes.map((item: ModeType, index: number) => (
                <div key={index}>
                    <strong
                        className="cursor-pointer highlight"
                        onClick={() => handleModeSelect(item.resources)}
                    >
                        {item.icon} {item.name}:
                    </strong>
                    <ul className="list-margin">
                        {Object.entries(item.resources).map(
                            ([resource, value], resourceIndex) => (
                                <li key={resourceIndex}>
                                    {resource}:{' '}
                                    {resource === 'Nuyen' ? `${value}k` : value}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            ))}
        </>
    )
}

export default ModeView
